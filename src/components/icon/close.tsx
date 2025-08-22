import * as React from "react";
export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Remove"
    role="img"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <title>{"Remove"}</title>
    <polyline
      stroke="currentColor"
      strokeWidth={3}
      strokeLinejoin="round" // sudut melengkung
      strokeLinecap="round" // ujung garis melengkung
      points="20.643 3.357 12 12 3.353 20.647"
    />
    <line
      strokeLinecap="round" // ujung garis melengkung
      stroke="currentColor"
      strokeWidth={3}
      x1={20.649}
      x2={3.354}
      y1={20.649}
      y2={3.354}
    />
  </svg>
);
