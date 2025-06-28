# Recipe Search
**

## Technologies
React + Typescript + TailwindCSS + Zustand + React Router
## Deploy on Netlify
Website hosted on netlify.app server
[recipe-finder](https://recipe-finder-react-typescript.netlify.app/)
## Developer Notes
### Managed by Zustand
#### 
```
import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"



export type RecipiesSliceType = {
    categories:Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipies: ( searchFilter: SearchFilter ) => Promise<void>
    selectRecipe: ( id: Drink['idDrink'] ) => Promise<void>
    closeModal : () => void
}

export const createRecipiesSlice : StateCreator<RecipiesSliceType> = ( set ) => ({
    categories: {
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    selectedRecipe: {} as Recipe,
    modal: false,
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
        set( { selectedRecipe , modal:true } )
    },
    closeModal: () => {
        set( { modal : false , selectedRecipe : {} as Recipe } )
    }
})
```
