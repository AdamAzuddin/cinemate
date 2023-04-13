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
    return <div className={`${resets.clapyResets} ${props.classes?.root || ""} ${props.className || ""} ${classes.root}`}><div className={`${props.classes?.tv || ""} ${classes.tv}`}></div><div className={classes.movieBox}>MovieBox</div></div>;
});
