import { NavLink as NavLinkMui, NavLinkProps } from 'react-router-dom';

import { useTheme } from '@mui/material';

export type NavLinkItem = {
  label: string;
  path: string;
};

const NavLink = (props: NavLinkProps) => {
  const theme = useTheme();

  return (
    <NavLinkMui
      {...props}
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : '',
          color: theme.palette.text.primary,
          backgroundColor: isActive ? '#2E308D' : 'transparent',
          padding: '0.5rem 1rem',
          width: '100%',
          textDecoration: 'none',
          transition: 'all ease 200ms'
        };
      }}
    />
  );
};
export default NavLink;
