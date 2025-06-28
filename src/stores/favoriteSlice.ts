import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipiesSlice, type RecipiesSliceType } from "./recipeSlice";
import { createNotificationSlice, type NotificationSliceType } from './notificacionSlice';

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: ( recipe: Recipe ) => void
    favoriteExist: ( id: Recipe['idDrink'] ) => boolean
    loadLocalStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipiesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = ( set , get , api ) => ({
    favorites:[],
    handleClickFavorite: (recipe) => {

        const exist = get().favoriteExist( recipe.idDrink )
        if( exist ){
            set( state => ({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink )
            }) )
            createNotificationSlice(set,get,api).showNotification( { 
                text: 'Se eliminó de mis favoritos' , 
                error: false 
            } )
        }else{
            set( state => ({
                favorites: [ ...state.favorites , recipe ]
            }) )

            createNotificationSlice(set,get,api).showNotification( { 
                text: 'Se agregó a mis favoritos' , 
                error: false 
            } )

        }

        createRecipiesSlice(set, get ,api).closeModal()
        localStorage.setItem('favorites' , JSON.stringify( get().favorites ))
        
    },
    favoriteExist: ( id ) => {
        return get().favorites.some( favorite => favorite.idDrink === id )
    },
    loadLocalStorage: () => {
        const storeFavorites = localStorage.getItem( 'favorites' )
        if( storeFavorites ){
            set( { favorites: JSON.parse( storeFavorites ) } )
        }

    }
   
}) 