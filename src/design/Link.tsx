import { LinkProps, Link as LinkRRD } from 'react-router-dom';

import { useTheme } from '@mui/material';

const Link = (props: LinkProps) => {
  const theme = useTheme();
  return (
    <LinkRRD
      {...props}
      style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
      {props.children}
    </LinkRRD>
  );
};
export default Link;
