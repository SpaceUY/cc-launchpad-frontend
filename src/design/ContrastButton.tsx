import { Button, ButtonProps, useTheme } from '@mui/material';

const ContrastButton = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      {...props}
      sx={{
        ...props.sx,
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
        '&:hover': { backgroundColor: theme.palette.text.secondary }
      }}
    />
  );
};
export default ContrastButton;
