import * as React from "react";
const PrivacyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label=""
    fill="currentColor"
    height={24}
    role="img"
    viewBox="0 0 24 24"
    width={24}
    {...props}
  >
    <title />
    <path
      d="M3 13.5a9 9 0 0 0 18 0V4.488A17.848 17.848 0 0 1 12 1.5a17.848 17.848 0 0 1-9 2.988Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="m11.283 7.925-.934 2.094-2.403.277a.785.785 0 0 0-.425 1.372l1.808 1.572-.523 2.342a.785.785 0 0 0 1.177.839L12 15.18l2.017 1.241a.785.785 0 0 0 1.177-.84l-.523-2.341 1.808-1.572a.785.785 0 0 0-.425-1.372l-2.403-.277-.934-2.094a.785.785 0 0 0-1.434 0Z"
      fillRule="evenodd"
    />
  </svg>
);
export { PrivacyIcon };
