import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types"



export type RecipiesSliceType = {
    categories:Categories
    fetchCategories: () => Promise<void>
    searchRecipies: () => Promise<void>
}

export const createRecipiesSlice : StateCreator<RecipiesSliceType> = ( set ) => ({
    categories: {
        drinks:[]
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set( { categories } ) 
    },
    searchRecipies: async () => {
        console.log('desde recipeSlice')
    }
})