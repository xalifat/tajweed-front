import { configureStore } from "@reduxjs/toolkit";
import application from "../slices/appSlices";
import azkary from "../slices/azkarySlices"
import lessons from "../slices/lessonSlice" 
import user from "../slices/userSlices"
import groups from "../slices/groupsSlice";
import quran from "../slices/quranSlice"

export const store = configureStore({
  reducer: {
    application,
    azkary,
    lessons,
    user,
    groups,
    quran
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
