import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { RootState } from "@/libs/store";
import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { useDialog } from "./dialog-modal/useDialog";
import { UIDialogComponent } from "./dialog/dialog";

interface layoutUISliceInterface {
  showBackButton: boolean;
}
const initialState: layoutUISliceInterface = {
  showBackButton: false,
};

export const layoutUISlice = createSlice({
  name: "layoutUISlice",
  initialState,
  reducers: {
    setShowBackButton: (state, action) => {
      state.showBackButton = action.payload;
    },
  },
});

export const { setShowBackButton } = layoutUISlice.actions;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UIDialogComponent />
      {children}
    </>
  );
};
const Main = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
Layout.Main = Main;
Layout.displayName = "Layout";

export default Layout;
