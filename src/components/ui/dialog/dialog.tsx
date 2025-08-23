import { Fragment, ReactNode, useEffect, useMemo, useState } from "react";
import { v4 } from "uuid";
import Dialog from "../dialog";
import { AnimatePresence } from "motion/react";
import IosSpinner from "../IosSpinner";

type DialogOptions = {
  id?: string;
  contentLoading?: boolean;
  onAccept?: () => void;
  title?: string;
  content: string | ReactNode | ReactNode[];
};
type Listeners = (options: DialogOptions) => void;
let listeners: Listeners[] = [];
export const dialog = {
  show(options: DialogOptions) {
    listeners.forEach((fn) =>
      fn({
        ...options,
        id: options.id ?? v4(),
      })
    );
  },

  subscribe: (fn: Listeners) => {
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((e) => e !== fn);
    };
  },
};

const UIDialogComponent = () => {
  const [dialogs, setDialogs] = useState<DialogOptions[]>([]);
  useEffect(() => {
    return dialog.subscribe((opts) =>
      setDialogs((e) => {
        const exits = e.some((e) => e.id === opts.id);
        if (exits) {
          return e;
        }
        return [...e, opts];
      })
    );
  }, []);
  useEffect(() => {
    console.log(dialogs);
  }, [dialogs]);
  function closeDialog(id: string) {
    setDialogs((e) => e.filter((e) => e.id != id));
  }
  const renderContent = (content: DialogOptions["content"]) =>
    Array.isArray(content) ? (
      content.map((e, index) => {
        return <Fragment key={index}>{e}</Fragment>;
      })
    ) : (
      <div>
        <div className="max-h-[300px] px-3  overflow-y-auto text-center">
          {content}
        </div>
      </div>
    );
  const current = useMemo(() => {
    return dialogs[dialogs.length - 1];
  }, [dialogs]);

  useEffect(() => {
    if (current) {
      window.document.body.style.overflow = "hidden";
    }
    return () => {
      if (current) {
        window.document.body.style.overflow = "auto";
      }
    };
  }, [current]);

  return (
    <AnimatePresence>
      {current && (
        <Dialog key={current.id}>
          {current.contentLoading ? (
            <div className="py-4 flex border items-center space-x-2 flex-col justify-center">
                <IosSpinner size={17}/>
                <span className="text-sm">Loading...</span>
            </div>
          ) : (
            <>
              {current.title && (
                <div className="p-4 text-center flex items-center justify-center">
                  <span className="text-2xl">{current.title}</span>
                </div>
              )}
              {renderContent(current.content)}
              {current.onAccept && (
                <Dialog.Item className="mt-4" onClick={current.onAccept}>
                  Accept
                </Dialog.Item>
              )}
            </>
          )}

          <Dialog.Item
            isDanger
            onClick={() => {
              closeDialog(current.id as string);
            }}
          >
            Close
          </Dialog.Item>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export { UIDialogComponent };
