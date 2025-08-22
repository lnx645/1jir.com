"use client";
import { cn } from "@/libs";
import {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  ReactNode,
  RefAttributes,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HTMLMotionProps, motion } from "motion/react";
import { Portal } from "./Portal";
type DialogComponent = ForwardRefExoticComponent<
  HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement> & HTMLMotionProps
> & {
  Item: typeof DialogItem;
};
const Dialog = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    return (
      <Portal>
        <motion.div
          ref={ref}
          role="dialog"
          className="fixed px-2 lg:px-0 flex items-center justify-center inset-0 bg-overlay-dialog"
          {...props}
        >
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }} // mulai transparan
            animate={{ scale: 1, opacity: 1 }} // fade in
            exit={{ scale: 1.1, opacity: 0 }} // fade out
            transition={{ duration: 0.1 }} // cepat tapi halus
            className="max-w-md flex-1 rounded-dialog-border-radius  bg-primary-background flex-col flex items-stretch align-middle shrink-0  mx-auto overflow-hidden"
          >
            {children}
          </motion.div>
        </motion.div>
        ,
      </Portal>
    );
  }
) as DialogComponent;

const DialogItem = ({
  isDanger,
  children,
  onClick,
}: {
  children: React.ReactNode;
  isDanger?: boolean;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "border-t-[1px] first:border-t-0  active:bg-option-presed text-base text-primary-text border-elevated-separator min-h-[48px] cursor-pointer px-[4px] py-[8px] text-center select-none",
        isDanger && "text-red-500 font-bold"
      )}
    >
      <motion.div whileTap={{ scale: 0.95 }}>{children}</motion.div>
    </motion.button>
  );
};
Dialog.Item = DialogItem;

export default Dialog;
