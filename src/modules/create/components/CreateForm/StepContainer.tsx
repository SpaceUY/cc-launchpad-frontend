import { ReactElement } from 'react';

import { Box } from '@mui/material';

const StepContainer = ({ children }: { children: ReactElement[] }) => {
  return (
    <Box
      sx={{
        mt: '2rem',
        minHeight: '36rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
      {children}
    </Box>
  );
};
export default StepContainer;
