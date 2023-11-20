import { ReactElement } from 'react';

import { Box } from '@mui/material';

const WhiteCard = ({
  children,
  backgroundTransparentWhite = false
}: {
  children: ReactElement;
  backgroundTransparentWhite?: boolean;
}) => {
  return (
    <Box
      sx={{
        borderRadius: '0.5rem',
        border: '1px solid white',
        background: backgroundTransparentWhite
          ? 'linear-gradient(transparent, transparent) padding-box, linear-gradient(40deg,rgba(255,255,255,1) 0%, rgba(255,255,255,0.80) 30%, rgba(255,255,255,0.80) 70%,rgba(255,255,255,1) 100%) border-box'
          : 'white',
        color: 'black',
        backdropFilter: 'blur(0.25rem)',
        padding: '2.25rem 1.875rem',
        height: '100%'
      }}>
      {children}
    </Box>
  );
};
export default WhiteCard;
