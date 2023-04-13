import { PlayIcon } from "./PlayIcon";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import classes from "./Play.module.css";
import resets from "../../_resets.module.css";
interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:1798 */
export const Play: FC<Props> = memo(function Play(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        {props.swap?.icon || <PlayIcon className={classes.icon2} />}
      </div>
    </div>
  );
});
