import { SVGProps, memo } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 12L8 8M9.33333 4.66667C9.33333 7.244 7.244 9.33333 4.66667 9.33333C2.08934 9.33333 0 7.244 0 4.66667C0 2.08934 2.08934 0 4.66667 0C7.244 0 9.33333 2.08934 9.33333 4.66667Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
