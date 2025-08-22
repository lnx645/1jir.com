import * as React from "react";
export const InsightsIcon = (props : React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="InsightsIcon"
    role="img"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <title>{"InsightsIcon"}</title>
    <rect
      fill="none"
      height={20}
      rx={5}
      stroke="currentColor"
      strokeWidth={2}
      width={20}
      x={2}
      y={2}
    />
    <rect height={12} rx={1} width={2} x={11} y={6} />
    <rect height={9} rx={1} width={2} x={15} y={9} />
    <rect height={5} rx={1} width={2} x={7} y={13} />
  </svg>
);
