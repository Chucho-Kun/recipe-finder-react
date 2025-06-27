import type { StateCreator } from "zustand";
import type { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: ( recipe: Recipe ) => void
    favoriteExist: ( id: Recipe['idDrink'] ) => boolean
}

/*export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesType, [], [], FavoritesSliceType> = ( set , get , api ) => ... */
/* createRecipesSlice( set, get , api).closeModal() */

export const createFavoritesSlice : StateCreator<FavoritesSliceType> = ( set , get ) => ({
    favorites:[],
    handleClickFavorite: (recipe) => {

        const exist = get().favoriteExist( recipe.idDrink )
        if( exist ){
            set( state => ({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink )
            }) )
        }else{
            set( state => ({
                favorites: [ ...state.favorites , recipe ]
            }) )
        }
        
    },
    favoriteExist: ( id ) => {
        return get().favorites.some( favorite => favorite.idDrink === id )
    }
   
}) 