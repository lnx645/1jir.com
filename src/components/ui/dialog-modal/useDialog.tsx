"use client";
import { JSX, useEffect, useId, useState } from "react";
import Dialog from "../dialog";
import { dialog } from "motion/react-m";
import { randomUUID } from "node:crypto";
import { v4 as uuidv4 } from "uuid";
type DialogOptions = {
  id?: string;
  title: string;
  text: string;
  cancleClick?: () => void | null;
  acceptTrigger?: () => void | null;
};
type DialogOptionState = DialogOptions & {
  isOpen: { resolve: (value: boolean) => void };
};
const useDialog = (): [
  (dialogs: DialogOptions) => Promise<unknown>,
  () => JSX.Element[]
] => {
  const [dialogs, setDialog] = useState<DialogOptionState[]>([]);
  function showDialog(dialog: DialogOptions): Promise<unknown> {
    return new Promise((resolve, reject) => {
      setDialog((prev) => [
        ...prev,
        {
          title: dialog.title,
          text: dialog.text,
          id: uuidv4(),
          cancleClick: dialog.cancleClick,
          acceptTrigger: dialog.acceptTrigger,
          isOpen: { resolve },
        },
      ]);
    });
  }
  useEffect(() => {
    console.log(dialogs);
  }, [dialogs]);
  function closemodal(id: string | undefined) {
    if (dialogs) {
      setDialog((prev) => {
        const newDialog = prev.filter((e) => e.id != id);
        return newDialog;
      });
    }
  }

  function RenderDialog() {
    return dialogs.map((option, index) => {
      return (
        <Dialog key={index}>
          <header className="text-center py-3 text-lg font-semibold">
            <h2>{option.title}</h2>
          </header>
          <div className="text-center pb-2">{option.text}</div>
          <div className="flex">
            <Dialog.Item
              className="first:border-t-1 flex-1 text-button-primary-link-text font-bold first:border-r"
              onClick={
                option.cancleClick
                  ? option.cancleClick
                  : () => closemodal(option.id)
              }
            >
              Close
            </Dialog.Item>
            {option.acceptTrigger && (
              <Dialog.Item
                className="first:border-t-1 flex-1 text-button-primary-link-text font-bold first:border-r"
                onClick={option.acceptTrigger}
              >
                OKE
              </Dialog.Item>
            )}
          </div>
        </Dialog>
      );
    });
  }

  return [showDialog, RenderDialog];
};

export { useDialog };
