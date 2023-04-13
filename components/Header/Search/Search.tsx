import { SearchIcon } from "./SearchIcon";
import { memo } from "react";
import type { FC, ReactNode } from "react";
import classes from "./Search.module.css";
import resets from "../../_resets.module.css";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:2135 */
export const Search: FC<Props> = memo(function Search(props = {}) {
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        width={400}
        bgcolor="transparent"
        border={1}
        borderColor="white"
        borderRadius={6}
        px={2}
      >
        <TextField
          variant="outlined"
          label="What do you want to watch?"
          sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
          fullWidth
        />
        <InputAdornment position="end">
          <div className={classes.icon}>
            {props.swap?.icon || <SearchIcon className={classes.icon2} />}
          </div>
        </InputAdornment>
      </Box>
    </div>
  );
});
