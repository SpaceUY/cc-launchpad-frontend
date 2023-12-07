import { ReactComponent as GlareBackground } from 'assets/images/Glare.svg';
import { ReactComponent as StarsBackground } from 'assets/images/Stars background.svg';
import { ReactComponent as ElipseS } from 'assets/images/ellipse-56.svg';
import { ReactComponent as ElipseF } from 'assets/images/ellipse-57.svg';
import space from 'assets/images/stars-landing.png';

import { Box, Button, Typography } from '@mui/material';

const Landing = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', height: '100hv', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', width: '100%', height: '90%' }}>
          <ElipseS
            style={{
              position: 'relative',
              top: '20%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </Box>
        <Box
          position="absolute"
          top={0}
          left={0}
          zIndex={-1}
          sx={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            objectFit: 'cover',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <img
            alt="galaxy"
            style={{
              height: '100%',
              objectFit: 'cover'
            }}
            src={space}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: 70
          }}>
          <Box>
            <Box
              sx={{
                width: '100%',
                maxWidth: '1920px',
                marginX: 20
              }}>
              <Box sx={{ width: '50%', paddingRight: '10%' }}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: '#FFF',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    fontSize: 56
                  }}>
                  THE ACE WAY
                  <br />
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontStyle: 'italic',
                      fontFamily: 'Roboto',
                      fontSize: 56
                    }}>
                    TO CRYPTO
                  </Typography>
                </Typography>

                <Typography sx={{ color: '#FFF' }}>
                  We offer a seamless, transparent, and multi-chain crowdfunding
                  experience, setting a new standard for the blockchain
                  industry.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}>
              <Button
                variant="outlined"
                sx={{
                  border: '3x solid',
                  borderColor: '#FFF',
                  boxShadow: '#FFF',
                  color: '#FFF'
                }}>
                LIFT-OFF
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: '100%', height: '100hv', overflow: 'hidden' }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '1920px',
            marginX: 20
          }}></Box>
      </Box>
    </Box>
  );
};

export default Landing;
