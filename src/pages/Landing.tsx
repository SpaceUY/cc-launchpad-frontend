import { ReactComponent as GlareBackground } from 'assets/images/Glare.svg';
import { ReactComponent as StarsBackground } from 'assets/images/Stars background.svg';
import backgroundPurple from 'assets/images/background-purple.png';
import { ReactComponent as ElipseS } from 'assets/images/ellipse-56.svg';
import { ReactComponent as ElipseF } from 'assets/images/ellipse-57.svg';
import logoCompany from 'assets/images/logo-company.png';
import space from 'assets/images/stars-landing.png';
import { useNavigate } from 'react-router-dom';

import {
  Facebook,
  Instagram,
  LinkOutlined,
  Star,
  Twitter
} from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box sx={{ width: '100%', height: '100hv', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', width: '100%', height: '90%' }}>
          <ElipseS
            style={{
              position: 'relative',
              top: '28%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </Box>
        <Box sx={{ position: 'absolute', width: '100%', height: '90%' }}>
          <ElipseS
            style={{
              position: 'relative',
              top: '28%',
              left: '50%',
              transform: 'translate(-50%, -50%) scaleX(-1)'
            }}
          />
        </Box>
        <Box
          position="absolute"
          top={50}
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
                justifyContent: 'center',
                maxWidth: '1920px'
              }}>
              <Button
                onClick={() => {
                  navigate('/lets-start');
                }}
                variant="outlined"
                sx={{
                  mt: 16.5,
                  width: 239,
                  height: 69,
                  border: '2x solid',
                  fontFamily: 'Roboto',
                  boxShadow: '#FFF',
                  color: '#FFF',
                  borderImage:
                    'linear-gradient(to right, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.64)) 1',
                  fontSize: 30,
                  fontWeight: 600
                }}>
                LIFT-OFF
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: 18.375,
            marginBottom: 17.5,
            width: '100%',
            maxWidth: '1920px',
            marginRight: -300,
            textAlign: 'center',
            color: '#FFF',
            height: 239,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            background:
              'linear-gradient(0deg, rgba(5,20,68,1) 0%, rgba(23, 22, 77, 0.8) 15%, rgba(23, 22, 77, 0.8) 85%, rgba(5,20,68,1) 100%)'
          }}>
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 24,
                textTransform: 'uppercase'
              }}>
              Multi-Chain
            </Typography>
            <Typography>
              Our platform supports various blockchain networks,
            </Typography>
            <Typography>
              ensuring flexibility and wider accessibility.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 24,
                textTransform: 'uppercase'
              }}>
              Transparent Transactions
            </Typography>
            <Typography>
              With Ace, every transaction is transparent and recorded
            </Typography>
            <Typography>
              on the blockchain, fostering trust and integrity.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 24,
                textTransform: 'uppercase'
              }}>
              User-Friendly
            </Typography>
            <Typography>We prioritize simplicity and ease of use,</Typography>
            <Typography>
              making blockchain crowdfunding accessible to everyone.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: '100%',
            maxWidth: '1920px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 36.25
          }}>
          <Box
            sx={{
              border: '2px solid #FFF',
              borderRight: 'none',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              width: 70,
              height: 437
            }}></Box>
          <Box
            sx={{
              border: '2px solid #FFF',
              borderRadius: 2.625,
              height: 493,
              maxWidth: 893,
              width: '100%'
            }}>
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: 'Roboto',
                fontWeight: 500,
                fontSize: 24,
                mt: 5,
                ml: 7.375,
                mb: 10,
                letterSpacing: 15
              }}>
              POPULAR
            </Typography>

            <Box sx={{ display: 'flex', pr: 6.25 }}>
              <Box
                component="img"
                width={169}
                height={169}
                ml={9.375}
                mr={6.875}
                src={logoCompany}
              />

              <Box>
                <Typography
                  mb={3.5}
                  fontSize={20}
                  fontWeight={500}
                  color="#FFF"
                  fontFamily="Roboto"
                  letterSpacing={20}>
                  AceXpand
                </Typography>

                <Typography fontSize={22} fontFamily="Roboto" color="#FFF">
                  This groundbreaking extension of the Ace platform enhances UX
                  with advanced features.
                </Typography>

                <Box
                  sx={{
                    mt: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                  <Typography
                    fontFamily="Roboto"
                    fontSize={17.5}
                    mr={1}
                    color="#FFF">
                    5
                  </Typography>
                  <Star sx={{ color: '#FFF', mr: 2 }} />

                  <Box
                    sx={{
                      width: 29,
                      height: 29,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(103, 102, 226)',
                      borderRadius: 999999
                    }}>
                    <LinkOutlined
                      sx={{
                        color: '#FFF',
                        fontSize: 16,
                        transform: 'rotate(-45deg)'
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ ml: 34, mt: 6.875 }}>
              <Button
                sx={{
                  width: 135,
                  height: 49,
                  borderRadius: 1.75,
                  backgroundColor: 'rgb(46, 48, 141)',
                  color: '#FFF',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  mr: 2.5
                }}>
                GO!
              </Button>

              <Button
                sx={{
                  width: 135,
                  height: 49,
                  borderRadius: 1.75,
                  border: '1px solid #FFF',
                  color: '#FFF',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  mr: 2.5
                }}>
                SEE MORE
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              border: '2px solid #FFF',
              borderLeft: 'none',
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              width: 70,
              height: 437
            }}></Box>
        </Box>

        <Typography
          fontFamily="Roboto"
          fontSize={25}
          color="#FFF"
          textAlign="center"
          mb={26.375}>
          Ace - Crowdfunding Reimagined. Discover the Power of Transparent,
          Multi-Chain Blockchain Innovation.
        </Typography>

        <Box
          sx={{
            backgroundColor: '#FFF',
            borderTopLeftRadius: 1000,
            borderTopRightRadius: 1000,
            height: 583,
            position: 'relative'
          }}>
          <Box
            sx={{
              width: 577,
              height: 577,
              backgroundColor: 'rgba(29, 66, 142, 1)',
              borderRadius: 999999,
              position: 'absolute',
              left: '50%',
              top: 150,
              transform: 'translate(-50%, -50%)'
            }}></Box>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: 18,
              textAlign: 'center',
              position: 'absolute',
              bottom: 20,
              width: 474,
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
            Ready to Transform Crowdfunding? Join Ace Today and Be Part of the
            Blockchain Revolution.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: '#FFF',
            pt: 13.875,
            pb: 4.375,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Box
            sx={{
              maxWidth: 1000,
              width: '100%'
            }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}>
              <Box display="flex">
                <Box
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 700
                  }}>
                  Product
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 700,
                    mx: 8
                  }}>
                  Features
                </Typography>
                <Typography
                  sx={{ fontFamily: 'Roboto', fontSize: 14, fontWeight: 700 }}>
                  Resources
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: 24
                }}>
                Trade
              </Typography>

              <Box display="flex">
                <Typography
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 700
                  }}>
                  About
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 700,
                    mx: 8
                  }}>
                  Blog
                </Typography>
                <Typography
                  sx={{ fontFamily: 'Roboto', fontSize: 14, fontWeight: 700 }}>
                  Support
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mt: 6, mb: 6.875, borderColor: '#000' }} />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: 296,
                  mb: 9
                }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    border: '1px solid #000',
                    borderRadius: 9999999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Facebook />
                </Box>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    border: '1px solid #000',
                    borderRadius: 9999999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Twitter />
                </Box>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    border: '1px solid #000',
                    borderRadius: 9999999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Instagram />
                </Box>
              </Box>
            </Box>

            <Box display="flex" justifyContent="center">
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  mr: 1.5
                }}>
                © 2010 — {new Date().getFullYear()}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: 14
                }}>
                Privacy — Terms
              </Typography>
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
