import * as React from "react";
const CalendarIcon = (props:React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-label="Calendar"
    fill="currentColor"
    height={24}
    role="img"
    viewBox="0 0 24 24"
    width={24}
    {...props}
  >
    <title>
      {
        "Account history, review changes you've made to your account since you created it."
      }
    </title>
    <rect
      fill="none"
      height={18.669}
      rx={2}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      width={20}
      x={2}
      y={3.331}
    />
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      x1={2}
      x2={22}
      y1={7.778}
      y2={7.778}
    />
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      x1={6.666}
      x2={6.666}
      y1={2}
      y2={4.665}
    />
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      x1={17.555}
      x2={17.555}
      y1={2}
      y2={4.667}
    />
    <circle cx={12} cy={12.666} r={1.001} />
    <circle cx={12} cy={17.112} r={1.001} />
    <circle cx={17} cy={12.666} r={1.001} />
    <circle cx={17} cy={17.112} r={1.001} />
    <circle cx={7} cy={12.666} r={1.001} />
    <circle cx={7} cy={17.112} r={1.001} />
  </svg>
);
export {CalendarIcon};
