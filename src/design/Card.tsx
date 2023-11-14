import { Box, BoxProps, SxProps } from '@mui/material';

const Card = ({ customSx, ...props }: BoxProps & { customSx?: SxProps }) => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(transparent, transparent) padding-box, linear-gradient(40deg, rgba(255,255,255,1) 0%,rgba(255,255,255,0.2) 1%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05) 70%,rgba(255,255,255,0.2) 99%, rgba(255,255,255,1) 100%) border-box',
        borderRadius: '1.5rem',
        border: '4px solid transparent',
        backdropFilter: 'blur(5px)',
        padding: '2rem',
        ...customSx
      }}
      {...props}>
      {props.children}
    </Box>
  );
};
export default Card;
