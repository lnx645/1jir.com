"use client";
import { CloseIcon } from "@/components/icon";
import Dialog from "../dialog";
import { AnimatePresence, motion } from "motion/react";
export const DialogModal = () => {
  return (
    <AnimatePresence>
      <Dialog>
        <header className="px-6 py-3 border-b border-separator flex items-center">
          <h1 className="font-bold font-base text-secondary-text">Modal</h1>
          <motion.button
            whileTap={{
              scale: 0.95,
            }}
            className="accent-primary-icon cursor-pointer ml-auto"
          >
            <CloseIcon width={15} height={15} />
          </motion.button>
        </header>
        <div className="p-5">
          <input
            type="text"
            placeholder="KEtikan nama anda"
            className="w-full border border-separator rounded  outline-none py-2 px-3"
          />
        </div>
      </Dialog>
    </AnimatePresence>
  );
};
