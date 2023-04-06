import { Button } from '@mui/material';

const GoogleButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      disableRipple
      className="text-black"
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;