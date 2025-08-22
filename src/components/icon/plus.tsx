import * as React from "react";
const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Follow"
    role="img"
    viewBox="0 0 10 9"
    width={24}
    height={24}
    {...props}
  >
    <title>{"Follow"}</title>
    <path d="M4.99512 8.66895C4.64355 8.66895 4.35059 8.36621 4.35059 8.03418V5.12891H1.50391C1.17188 5.12891 0.864258 4.83594 0.864258 4.47949C0.864258 4.12793 1.17188 3.83008 1.50391 3.83008H4.35059V0.924805C4.35059 0.583008 4.64355 0.290039 4.99512 0.290039C5.35156 0.290039 5.64453 0.583008 5.64453 0.924805V3.83008H8.49121C8.83301 3.83008 9.13086 4.12793 9.13086 4.47949C9.13086 4.83594 8.83301 5.12891 8.49121 5.12891H5.64453V8.03418C5.64453 8.36621 5.35156 8.66895 4.99512 8.66895Z" />
  </svg>
);
const PlusIcon2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Add"
    role="img"
    viewBox="0 1 20 20"
    width={24}
    height={24}
    {...props}
  >
    <title>{"Add"}</title>
    <circle
      fill="transparent"
      stroke="currentColor"
      cx={10}
      cy={10.5}
      r={8.25}
      strokeWidth={1.5}
    />
    <path
      stroke="currentColor"
      d="M9.99805 6.72852V13.9285"
      strokeLinecap="round"
    />
    <path
      stroke="currentColor"
      d="M13.5977 10.3281H6.39766"
      strokeLinecap="round"
    />
  </svg>
);

export { PlusIcon, PlusIcon2 };
