import * as React from "react";
const EmojiSmileIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Add an emoji"
    role="img"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{"Add an emoji"}</title>
    <circle
      cx={12}
      cy={12}
      fill="none"
      r={9.25}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <circle cx={16} cy={12} fill="currentColor" r={1} />
    <circle cx={8} cy={12} fill="currentColor" r={1} />
    <path
      d="M9 15V15C10.3589 17.2648 13.6411 17.2648 15 15V15"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </svg>
);
export { EmojiSmileIcon };
