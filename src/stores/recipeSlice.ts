import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, Drink, Drinks, SearchFilter } from "../types"



export type RecipiesSliceType = {
    categories:Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipies: ( searchFilter: SearchFilter ) => Promise<void>
    selectRecipe: ( id: Drink['idDrink'] ) => Promise<void>
}

export const createRecipiesSlice : StateCreator<RecipiesSliceType> = ( set ) => ({
    categories: {
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set( { categories } ) 
    },
    searchRecipies: async ( filters ) => {
        const drinks = await getRecipes( filters )
        set( { drinks })
    },
    selectRecipe: async ( id ) => {
        const selectedRecipe = await getRecipeById( id )
        console.log( selectedRecipe )
    }
})