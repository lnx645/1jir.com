import { DialogStore } from "@/components/ui/MenuOptionDialog/menu-option-store";
import { DialogOptions } from "@/components/ui/MenuOptionDialog";
import { dialog } from "@/components/ui/dialog/dialog";

export const onec = {
  notification: {
    dialog: (options: DialogOptions[]) => {
      DialogStore.openDialog(options);
    },
    dialogv2: dialog,
  },
};
