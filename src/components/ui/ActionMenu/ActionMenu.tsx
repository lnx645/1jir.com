"use client";
import { button, h1 } from "motion/react-m";
import { AnimatePresence, motion } from "motion/react";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useActionMenu } from "./ActionMenuProvider";
import { cn } from "@/libs";

const ActionMenuProvider = createContext<{
  id: string | null;
  isActive: boolean;
  triggerRect: DOMRect | null;
  setTriggerRect: (pos: DOMRect | null) => void;
}>({
  triggerRect: null,
  id: null,
  setTriggerRect(pos) {},
  isActive: false,
});
const useLocalContext = () => {
  return useContext(ActionMenuProvider);
};
const ActionMenu = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const ctx = useLocalContext();
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);
  const { activeMenuID, setActiveMenuID } = useActionMenu();
  const id = useId();
  useEffect(() => {
    setIsActive(activeMenuID === id);
  }, [activeMenuID, id, isActive]);
  return (
    <ActionMenuProvider.Provider
      value={{
        id,
        isActive,
        setTriggerRect,
        triggerRect,
      }}
    >
     
      {children}
    </ActionMenuProvider.Provider>
  );
};
const Trigger = ({ children }: { children: ReactNode }) => {
  const ctx = useActionMenu();
  const { id } = useLocalContext();

  const btnRef = useRef<HTMLButtonElement>(null);

  function onClick() {
    ctx.setActiveMenuID(ctx.activeMenuID === id ? null : id);
  }

  const local = useLocalContext();
  useLayoutEffect(() => {
    let frame: number;

    function setRect() {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        if (btnRef.current) {
          let rect = btnRef.current.getBoundingClientRect();
          local.setTriggerRect(rect);
        }
      });
    }
    setRect();
    window.addEventListener("scroll", setRect);
    window.addEventListener("resize", setRect);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", setRect);
      window.removeEventListener("resize", setRect);
    };
  }, [btnRef]);

  return (
    <motion.button
      ref={btnRef}
      onMouseDown={onClick}
      className="bg-red-500 px-3 block max-w-md py-2"
    >
      {children}
    </motion.button>
  );
};
const Body = ({ children }: { children: ReactNode }) => {
  const { isActive, triggerRect } = useLocalContext();
  const targetRef = useRef<HTMLDivElement>(null);

  const style = useMemo(() => {
    if (!triggerRect) {
      return;
    }
    return {
      top: triggerRect.bottom + window.scrollY,
    };
  }, [triggerRect]);

  return (
    <AnimatePresence>
      {isActive && triggerRect && (
        <motion.div
          ref={targetRef}
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 20,
          }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
          style={style}
          className="bg-primary-background z-50 shadow-primary  absolute  shadow-always-dark-overlay rounded-dialog-border-radius max-w-xs"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
ActionMenu.Trigger = Trigger;
ActionMenu.Body = Body;

export { ActionMenuProvider, ActionMenu };
