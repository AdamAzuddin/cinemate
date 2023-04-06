import { Button, ButtonProps } from '@mui/material';

interface GoogleButtonProps extends ButtonProps {
  text: string
}


const GoogleButton = (props: GoogleButtonProps) => {

  return (
    <Button
    {...props}
      variant="contained"
      color="primary"
      disableRipple
      className="text-black bg-white hover:bg-gray-100"
    >
      {props.text} with Google
    </Button>
  );
};

export default GoogleButton;