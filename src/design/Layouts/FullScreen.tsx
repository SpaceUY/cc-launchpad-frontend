import { ReactComponent as GlareBackground } from 'assets/images/Glare.svg';
import { ReactComponent as StarsBackground } from 'assets/images/Stars background.svg';
import logo from 'assets/images/logo-space.png';
import { motion } from 'framer-motion';
import useWeb3auth from 'hooks/useWeb3auth';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';

import Card from 'design/Card';
import NavLink, { NavLinkItem } from 'design/NavLink';

const navigation: NavLinkItem[] = [
  { path: '/my-assets', label: 'MY ASSETS' },
  { path: '/create', label: 'CREATE' },
  { path: '/participate', label: 'PARTICIPATE' },
  { path: '/all-deals', label: 'ALL DEALS' },
  { path: '/help', label: 'HELP' }
];

const variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    opacity: 0,
    x: '-100%',
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const FullScreen = ({
  showNavigation = true,
  showBackgroundImages = true
}: {
  showNavigation?: boolean;
  showBackgroundImages?: boolean;
}) => {
  const Web3auth = useWeb3auth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box position="fixed" top={0} left={0} zIndex={-1} width="100%">
        {showBackgroundImages && <StarsBackground />}
      </Box>
      <Box position="fixed" bottom={0} left={'5%'} zIndex={-1}>
        {showBackgroundImages && <GlareBackground />}
      </Box>
      <AppBar position="fixed">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}>
            <Box
              display="flex"
              gap={1}
              alignItems="center"
              onClick={() => {
                navigate('/');
              }}
              sx={{ cursor: 'pointer' }}>
              <img src={logo} alt="project logo" />
              <Typography
                fontStyle="italic"
                fontWeight={700}
                fontSize="2rem"
                pt={1}>
                ACE
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              <Button
                color="inherit"
                onClick={async () => {
                  if (Web3auth)
                    Web3auth.loggedIn ? Web3auth.logout() : Web3auth.login();
                }}>
                {Web3auth && Web3auth.loggedIn ? 'Disconnect' : 'Connect'}
              </Button>
              <Button
                color="primary"
                variant="contained"
                sx={{ px: 4 }}
                onClick={() => {
                  navigate('/lets-start');
                }}>
                JOIN
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column'
              }}>
              <IconButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <motion.nav
                animate={isOpen ? 'open' : 'closed'}
                variants={variants}>
                <IconButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
                  <MenuIcon />
                </IconButton>
              </motion.nav>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box pt="6.375rem" minHeight="100vh" display="flex" gap={2}>
        {showNavigation && (
          <Card
            component="aside"
            mt="8rem"
            customSx={{
              padding: '2rem 0',
              borderWidth: 0,
              height: 'fit-content',
              minWidth: '12.875rem',
              borderRadius: '0 1.5rem 1.5rem 0'
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {navigation.map((nav) => (
                <NavLink key={nav.path} to={nav.path}>
                  {nav.label}
                </NavLink>
              ))}
            </Box>
          </Card>
        )}
        <Outlet />
      </Box>
    </>
  );
};
export default FullScreen;
