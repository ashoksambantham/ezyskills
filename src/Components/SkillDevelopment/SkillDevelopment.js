import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import SkillBanner from '../../assets/img/skillBanner.png'; // Replace with the actual path to your right-side image
import CollegeIcon from '../../assets/img/college.png';
import ProfessionalIcon from '../../assets/img/Individual.png';
import StartupIcon from '../../assets/img/startup.png';
import CorporateIcon from '../../assets/img/corporate.png';
import Grid from '@mui/material/Grid';

const SkillDevelopment = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '40px 0' }}>
      <Typography
        data-aos="fade-up"
        data-aos-delay="100"
        variant="h4"
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          fontWeight: 'bold',
          color: '#F98149',
          marginBottom: '20px',
          textTransform: 'uppercase',
        }}>
        Who Can Join
      </Typography>

      <Grid container spacing={1}>
        {/* Left Section - Skill Development Categories */}
        <Grid xs={12} md={6}>
          <Box
            sx={{ flex: 1, paddingRight: { md: '20px' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              data-aos="fade-up"
              data-aos-delay="200"
              variant="h5"
              sx={{
                marginBottom: '40px',
                textTransform: 'capitalize',
                color: '#003F7D',
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '32px', sm: '48px', md: '64px' },
                padding: { xs: '0 3px', sm: 'none' },
              }}>
              Skill Development Schemes For All
            </Typography>
          </Box>
          <Grid container rowSpacing={1}>
            <Grid
              data-aos="fade-up"
              data-aos-delay="300"
              xs={12}
              sm={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                my: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#003F7D', fontSize: 32 }}>
                01
              </Typography>
              <Box
                component="div"
                sx={{
                  ml: 2,
                  display: 'flex',
                  alignItems: { xs: 'center', sm: 'baseline' },
                  flexDirection: 'column',
                }}>
                <Box
                  component="img"
                  src={CollegeIcon}
                  alt="Colleges/Universities Icon"
                  sx={{
                    width: { xs: '100px', md: '60px' },
                    height: { xs: '100px', md: '60px' },
                    marginBottom: '10px',
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{ color: '#303030', fontWeight: 'bold', fontSize: 16 }}>
                  Colleges/Universities
                </Typography>
              </Box>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-delay="300"
              xs={12}
              sm={6}
              sx={{
                display: 'flex',
                alignItems: { xs: 'center', sm: 'row' },
                my: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#003F7D', fontSize: 32 }}>
                02
              </Typography>
              <Box
                component="div"
                sx={{
                  ml: 2,
                  display: 'flex',
                  alignItems: { xs: 'center', sm: 'baseline' },
                  flexDirection: 'column',
                }}>
                <Box
                  component="img"
                  src={ProfessionalIcon}
                  alt="Individuals/Working Professionals Icon"
                  sx={{
                    width: { xs: '100px', md: '60px' },
                    height: { xs: '100px', md: '60px' },
                    marginBottom: '10px',
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{ color: '#303030', fontWeight: 'bold', fontSize: 16 }}>
                  Individuals/Working Professionals
                </Typography>
              </Box>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-delay="400"
              xs={12}
              sm={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                my: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#003F7D', fontSize: 32 }}>
                03
              </Typography>
              <Box
                component="div"
                sx={{
                  ml: 2,
                  display: 'flex',
                  alignItems: { xs: 'center', sm: 'baseline' },
                  flexDirection: 'column',
                }}>
                <Box
                  component="img"
                  src={StartupIcon}
                  alt="Startups Icon"
                  sx={{
                    width: { xs: '100px', md: '60px' },
                    height: { xs: '100px', md: '60px' },
                    marginBottom: '10px',
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{ color: '#303030', fontWeight: 'bold', fontSize: 16 }}>
                  Startups
                </Typography>
              </Box>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-delay="400"
              xs={12}
              sm={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                my: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#003F7D', fontSize: 32 }}>
                04
              </Typography>
              <Box
                component="div"
                sx={{
                  ml: 2,
                  display: 'flex',
                  alignItems: { xs: 'center', sm: 'baseline' },
                  flexDirection: 'column',
                }}>
                <Box
                  component="img"
                  src={CorporateIcon}
                  alt="Corporates Icon"
                  sx={{
                    width: { xs: '100px', md: '60px' },
                    height: { xs: '100px', md: '60px' },
                    marginBottom: '10px',
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{ color: '#303030', fontWeight: 'bold', fontSize: 16 }}>
                  Corporates
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Section - Image */}
        <Grid
          xs={12}
          md={6}
          sx={{ my: { xs: 3 }, display: 'flex' }}
          data-aos="fade-up"
          data-aos-delay="100">
          <Box
            component="img"
            src={SkillBanner}
            alt="Skill Development"
            sx={{
              width: { xs: '80%', md: '100%' }, // Full width in its container
              height: 'auto', // Maintain aspect ratio
              borderRadius: { xs: '8px', md: '10px' }, // Slight radius for responsiveness
              objectFit: 'contain',
              mx: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillDevelopment;
