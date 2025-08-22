"use client";
import { memo, ReactNode, useMemo } from "react";
import { createPortal } from "react-dom";

export const Portal = memo(({ children }: { children: ReactNode }) => {
  return typeof window != "undefined" && createPortal(children, document.body);
});
