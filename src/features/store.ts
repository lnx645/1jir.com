import { countSlice } from "./counter/slice/counterSlice";
export const featureStore = {
  counter: countSlice.reducer,
} satisfies {
  counter: typeof countSlice.reducer;
};
