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
  HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>
> & {
  Item: typeof DialogItem;
};
const Dialog = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ children, ...props }, ref) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
      <Portal>
        <motion.div
          role="dialog"
          ref={ref}
          initial={{ scale: 1.1, opacity: 0 }} // mulai transparan
          animate={{ scale: 1, opacity: 1 }} // fade in
          exit={{ scale: 1.1, opacity: 0 }} // fade out
          transition={{ duration: 0.1 }} // cepat tapi halus
          className="max-w-xs top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-full mx-auto fixed z-50 lg:max-w-sm flex-1 rounded-dialog-border-radius  bg-primary-background backdrop-blur-2xl flex-col flex items-stretch align-middle shrink-0  overflow-hidden"
          {...props}
        >
          {children}
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
  className,
}: {
  className?: string;
  children: React.ReactNode;
  isDanger?: boolean;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      autoFocus
      onClick={onClick}
      className={cn(
        "border-t-[1px] focus-within:outline-1 focus-within:outline-primary outline-none focus-within:text-secondary-text first:border-t-0  active:bg-option-presed text-base text-primary-text border-elevated-separator min-h-[48px] cursor-pointer px-[4px] py-[8px] text-center select-none",
        isDanger && "text-red-500 font-bold",
        className
      )}
    >
      <motion.div whileTap={{ scale: 0.95 }}>{children}</motion.div>
    </motion.button>
  );
};
Dialog.Item = DialogItem;

export default Dialog;
