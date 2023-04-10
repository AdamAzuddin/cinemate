import { Button, ButtonProps } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';

interface GoogleButtonProps extends ButtonProps {
  text: string
}


const GoogleButton = (props: GoogleButtonProps) => {

  return (
    <Button
    {...props}
      variant="outlined"
      disableRipple
      className="text-black bg-white hover:bg-gray-100"
    >
      {props.text} with Google
      <FcGoogle size={32}/>
    </Button>
  );
};

export default GoogleButton;