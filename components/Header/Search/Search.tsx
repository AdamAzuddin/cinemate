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
    <div className="relative z-10 mt-5">
      <div className="absolute top-0 left-0">
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          width={400}
          bgcolor="transparent"
          border={1}
          borderColor="white"
          borderRadius={6}
          px={2}
          left="50%"
          style={{ transform: "translateX(-50%)" }}
        >
          <TextField
            variant="outlined"
            placeholder="Search for a movie, drama or genre ..."
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "transparent",
              },
            }}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <div className={classes.icon}>
                    {props.swap?.icon || <SearchIcon className={classes.icon2} />}
                  </div>
                </InputAdornment>
              ),
              style: {
                color: "#FFFFFF", 
              },
            }}
          />
        </Box>
      </div>
    </div>
  );
});
