import * as React from "react";
const NextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Next"
    role="img"
    viewBox="0 0 13 12"
    width={24}
    height={24}
    {...props}
  >
    <title>{"Next"}</title>
    <path
      d="m2.5 4.2 4 4 4-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default NextIcon;
