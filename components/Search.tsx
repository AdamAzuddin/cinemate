import { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { FaSearch } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
});

const Search = () => {
  const [value, setValue] = useState("");
  const classes = useStyles();

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex-1 my-3 self-center bg-blue items-center">
      <TextField
        label="Label"
        variant="outlined"
        value={value}
        onChange={handleChange}
        className={classes.root}
        InputLabelProps={{
          style: { color: "white" },
        }}
        sx={{
          input: { color: "white" },
          "& .MuiOutlinedInput-root": {
            borderRadius: "6px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "6px",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FaSearch color="white" className="hover:cursor-pointer" />
            </InputAdornment>
          ),
          autoComplete: "off",
        }}
      />
    </div>
  );
};

export default Search;