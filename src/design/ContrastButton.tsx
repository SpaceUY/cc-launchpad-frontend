import { Button, ButtonProps } from '@mui/material';

const WhiteButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      sx={{
        ...props.sx,
        backgroundColor: props.disabled ? 'transparent' : 'whitesmoke',
        color: props.disabled ? '#333 !important' : 'black',
        '&:hover': { backgroundColor: '#ccc' }
      }}
    />
  );
};
export default WhiteButton;
