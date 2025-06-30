import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { createRecipiesSlice, type RecipiesSliceType } from './recipeSlice';
import { createFavoritesSlice, type FavoritesSliceType } from './favoriteSlice';
import { createNotificationSlice, type NotificationSliceType } from "./notificacionSlice";
import { createAISlice, type AISliceType } from './aiSlice';

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>()(devtools( (...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
}) ))