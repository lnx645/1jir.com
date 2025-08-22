import { DialogStore } from "@/components/ui/MenuOptionDialog/menu-option-store";
import { DialogOptions } from "@/components/ui/MenuOptionDialog";

export const onec = {
  notification: {
    dialog: (options:  DialogOptions[]) => {
      DialogStore.openDialog(options);
    },
  },
};
