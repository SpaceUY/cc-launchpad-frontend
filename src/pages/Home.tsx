import { useRef, useState } from 'react';

import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

import Card from 'design/Card';
import ContrastButton from 'design/ContrastButton';
import Link from 'design/Link';

const Home = () => {
  const letsGetStartedRef = useRef<HTMLParagraphElement | null>(null);
  const [showCardText1, setShowCardText1] = useState<boolean>(false);
  const [showCardText2, setShowCardText2] = useState<boolean>(false);

  const onMouseEnterCard1 = () => {
    setShowCardText1(true);
  };
  const onMouseLeaveCard1 = () => {
    setShowCardText1(false);
  };

  const onMouseEnterCard2 = () => {
    setShowCardText2(true);
  };
  const onMouseLeaveCard2 = () => {
    setShowCardText2(false);
  };

  const onMouseEnter = () => {
    if (letsGetStartedRef.current) {
      letsGetStartedRef.current.style.opacity = '0.25';
      letsGetStartedRef.current.style.filter = 'blur(.5rem)';
    }
  };
  const onMouseLeave = () => {
    if (letsGetStartedRef.current) {
      letsGetStartedRef.current.style.opacity = '1';
      letsGetStartedRef.current.style.filter = '';
    }
  };

  return (
    <Container
      sx={{
        minHeight: 'calc(100vh - 6.375rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Typography
        fontSize={80}
        fontWeight={600}
        letterSpacing={'0.2rem'}
        textTransform={'uppercase'}
        className="lestget"
        ref={letsGetStartedRef}
        color="white"
        sx={{ transition: 'all ease 400ms' }}>
        {"Let's get "}
        <Typography
          component="span"
          fontSize={75}
          fontWeight={500}
          fontStyle="italic"
          letterSpacing={'0.1406rem'}
          alignSelf={'center'}
          textTransform={'uppercase'}>
          started
        </Typography>
      </Typography>
      <Box
        onMouseEnter={() => {
          onMouseEnter();
          onMouseEnterCard1();
        }}
        onMouseLeave={() => {
          onMouseLeave();
          onMouseLeaveCard1();
        }}
        position="fixed"
        bottom={'-14rem'}
        display="flex"
        gap={'20%'}
        left={'15%'}
        sx={{
          transition: 'all ease-in 400ms',
          '&:hover': { bottom: '-2%' },
          minHeight: '10rem'
        }}>
        <Link to="/create">
          <Card width="21.625rem" height="100%">
            <Typography
              fontSize="2.25rem"
              fontWeight={500}
              textAlign="center"
              textTransform="uppercase">
              Create
            </Typography>
            {showCardText1 ? (
              <>
                <Typography
                  fontSize="1.125rem"
                  fontWeight={500}
                  textAlign="center"
                  pt={'1.25rem'}
                  textTransform="uppercase">
                  Your own ido - Condition True
                </Typography>
                <Typography
                  fontSize="1.125rem"
                  fontWeight={500}
                  textAlign="center"
                  pt={'1.25rem'}>
                  Launch with Confidence and Success
                </Typography>
              </>
            ) : (
              <Box sx={{ minHeight: '8rem' }} />
            )}

            <ContrastButton
              fullWidth
              variant="contained"
              color="inherit"
              sx={{
                mt: '3.875rem',
                fontSize: '1.125rem',
                marginBottom: '1rem',
                padding: 0,
                minHeight: '3rem'
              }}>
              GO
            </ContrastButton>
          </Card>
        </Link>
      </Box>
      <Box
        position="fixed"
        bottom={'-14rem'}
        display="flex"
        gap={'25%'}
        right={'15%'}
        onMouseEnter={() => {
          onMouseEnter();
          onMouseEnterCard2();
        }}
        onMouseLeave={() => {
          onMouseLeave();
          onMouseLeaveCard2();
        }}
        sx={{ transition: 'all ease-in 200ms', '&:hover': { bottom: '-2%' } }}>
        <Link to="/participate">
          <Card width="21.625rem" height="100%">
            <Typography
              fontSize="2.25rem"
              fontWeight={500}
              textAlign="center"
              textTransform="uppercase">
              Participate
            </Typography>
            {showCardText2 ? (
              <>
                {' '}
                <Typography
                  fontSize="1.125rem"
                  fontWeight={500}
                  textAlign="center"
                  pt={'1.25rem'}
                  textTransform="uppercase">
                  AVAILABLE IDOs
                </Typography>
                <Typography
                  fontSize="1.125rem"
                  fontWeight={500}
                  textAlign="center"
                  pt={'1.25rem'}>
                  Dive into a World of Promising Projects
                </Typography>
              </>
            ) : (
              <Box sx={{ minHeight: '8rem' }} />
            )}

            <ContrastButton
              fullWidth
              variant="contained"
              color="inherit"
              sx={{
                mt: '3.875rem',
                fontSize: '1.125rem',
                marginBottom: '1rem',
                padding: 0,
                minHeight: '3rem'
              }}>
              GO
            </ContrastButton>
          </Card>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
