import { MenuAlt4Icon } from "./MenuAlt4Icon";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import classes from "./MenuAlt4.module.css";
import resets from "../../_resets.module.css";
interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:1552 */
export const MenuAlt4: FC<Props> = memo(function MenuAlt4(props = {}) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ""} ${
        props.className || ""
      } ${classes.root}`}
    >
      <div className={classes.icon}>
        {props.swap?.icon || <MenuAlt4Icon className={classes.icon2} />}
      </div>
    </div>
  );
});
