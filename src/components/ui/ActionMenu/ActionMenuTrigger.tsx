import { forwardRef,  ButtonHTMLAttributes } from "react";
interface TriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const ActionMenuTrigger = forwardRef<
  HTMLButtonElement, TriggerProps
>(({children, ...props}, ref) => {
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});
export {ActionMenuTrigger};
