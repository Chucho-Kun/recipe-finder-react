import type { StateCreator } from "zustand"


export type AISliceType = {
    recipe: string
}

export const createAISlice : StateCreator<AISliceType,[],[],AISliceType> = () => ({
    recipe:''
})