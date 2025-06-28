import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { createRecipiesSlice, type RecipiesSliceType } from './recipeSlice';
import { createFavoritesSlice, type FavoritesSliceType } from './favoriteSlice';
import { createNotificationSlice, type NotificationSliceType } from "./notificacionSlice";

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools( (...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
}) ))