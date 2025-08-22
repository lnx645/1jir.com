"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Dialog from "../dialog";
import { DialogStore } from "./menu-option-store";
import { Preahvihear } from "next/font/google";
import { AnimatePresence } from "motion/react";
import MoreIcon from "@/components/icon/more";
import NextIcon from "@/components/icon/next";
export type DialogOptions = {
  text: string;
  hasSub?: boolean;
  isDanger?: boolean;
  onClick: () => void;
};

export const MenuOptionDialog = () => {
  const [history, setHistory] = useState<DialogOptions[][]>([]);

  useEffect(() => {
    return DialogStore.subscribe((opts) =>
      setHistory((prev) => [...prev, opts])
    );
  }, []);
  const currentOptions = useMemo(
    () => history[history.length - 1] ?? null,
    [history]
  );
  const handleCancel = () => {
    setHistory((prev) => prev.slice(0, -1));
  };
  return (
    <>
      <AnimatePresence>
        {currentOptions && (
          <Dialog>
            {currentOptions.map((option, index) => {
              return (
                <Dialog.Item
                  isDanger={option.isDanger}
                  key={index}
                  onClick={option.onClick}
                >
                  <div className="flex relative items-center">
                    <span className="flex-1 text-center"> {option.text}</span>
                    {option.hasSub && (
                      <NextIcon
                        width={16}
                        height={16}
                        className="ml-auto absolute right-3 -rotate-90"
                      />
                    )}
                  </div>
                </Dialog.Item>
              );
            })}
            <Dialog.Item isDanger={false} onClick={handleCancel}>
              Cancel
            </Dialog.Item>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
