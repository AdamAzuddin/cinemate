import { SVGProps, memo } from "react";

const MenuAlt4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.38419e-06 1C2.38419e-06 0.447715 0.447718 0 1 0H13C13.5523 0 14 0.447715 14 1C14 1.55228 13.5523 2 13 2H1C0.447718 2 2.38419e-06 1.55228 2.38419e-06 1Z"
      fill="#111827"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.38419e-06 7C2.38419e-06 6.44772 0.447718 6 1 6H13C13.5523 6 14 6.44772 14 7C14 7.55228 13.5523 8 13 8H1C0.447718 8 2.38419e-06 7.55228 2.38419e-06 7Z"
      fill="#111827"
    />
  </svg>
);

const Memo = memo(MenuAlt4Icon);
export { Memo as MenuAlt4Icon };
