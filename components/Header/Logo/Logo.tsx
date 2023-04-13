import { memo } from "react";
import type { FC } from "react";
import classes from "./Logo.module.css";
import resets from "../../_resets.module.css";
interface Props {
  className?: string;
  classes?: {
    tv?: string;
    root?: string;
  };
}
/* @figmaId 1251:588 */
export const Logo: FC<Props> = memo(function Logo(props = {}) {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center mt-5 ml-5">
      <div className="flex-shrink-0 relative">
        <img src="../assets/tv.png" alt="TV Logo" className={classes.tv} />
      </div>
      <div className="ml-2 flex-shrink-0">
        <div className={classes.movieBox}>MovieBox</div>
      </div>
    </div>
  );
});
