import { SVGProps, memo } from "react";

const MenuAlt4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600003 1.4C0.600003 0.737258 1.13726 0.2 1.8 0.2H16.2C16.8628 0.2 17.4 0.737258 17.4 1.4C17.4 2.06274 16.8628 2.6 16.2 2.6H1.8C1.13726 2.6 0.600003 2.06274 0.600003 1.4Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600003 8.6C0.600003 7.93726 1.13726 7.4 1.8 7.4H16.2C16.8628 7.4 17.4 7.93726 17.4 8.6C17.4 9.26274 16.8628 9.8 16.2 9.8H1.8C1.13726 9.8 0.600003 9.26274 0.600003 8.6Z"
      fill="white"
    />
  </svg>
);

const Memo = memo(MenuAlt4Icon);
export { Memo as MenuAlt4Icon };
