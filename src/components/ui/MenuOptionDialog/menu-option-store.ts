import { DialogOptions } from "./MenuOptionDialog";

type Listener = (options: DialogOptions[]) => void;

let listeners: Listener[] = [];

export const DialogStore = {
  openDialog: (options: DialogOptions[]) => {
    listeners.forEach((fn) => fn(options));
  },
  subscribe: (fn: Listener) => {
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((l) => l !== fn);
    };
  },
};
