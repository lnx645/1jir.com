import { layoutUISlice } from "@/components/ui/layout";
import { featureStore } from "@/features/store";
import { configureStore } from "@reduxjs/toolkit";
export const makeStore = () => {
  return configureStore({
    devTools:process.env.NODE_ENV !== "production",
    reducer: {
      ...featureStore,
      layoutUISlice : layoutUISlice.reducer,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];