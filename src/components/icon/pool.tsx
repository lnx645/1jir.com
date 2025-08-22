import * as React from "react";
const PoolIcon = (props : React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Add a poll"
    role="img"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <title>{"Add a poll"}</title>
    <rect fill="currentColor" height={1.5} rx={0.75} width={8} x={4} y={5.5} />
    <rect
      fill="currentColor"
      height={1.5}
      rx={0.75}
      width={16}
      x={4}
      y={11.25}
    />
    <rect fill="currentColor" height={1.5} rx={0.75} width={11} x={4} y={17} />
  </svg>
);
export default PoolIcon;
