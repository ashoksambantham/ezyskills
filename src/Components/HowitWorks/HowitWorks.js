import React from 'react';
import { Box, Grid, Typography, Container, IconButton } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import JobSeekerIcon from '../../assets/img/Jobseeker1.png';
import EmployedIcon from '../../assets/img/Employed.png';
import StepIcon1 from '../../assets/img/step1.png';
import StepIcon2 from '../../assets/img/step2.png';
import StepIcon3 from '../../assets/img/step3.png';
import StepIcon4 from '../../assets/img/step4.png';
import StepIcon5 from '../../assets/img/step5.png';
import StepIcon6 from '../../assets/img/step6.png';
import { useMediaQuery, useTheme } from '@mui/material';
const HowItWorks = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: '#003F7D',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '20px',
        paddingBottom: '50px',
      }}>
      {/* Header */}
      <Container>
        <Box
          data-aos="fade-up"
          data-aos-delay="100"
          sx={{
            textAlign: 'center',
            backgroundColor: '#F98149',
            color: '#FFFFFF',
            padding: '10px 40px',
            borderRadius: '15px',
            width: { xs: '50%', sm: '40%' },
            margin: '0 auto',
            position: 'relative',
            top: '-46px',
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: { xs: '20px', sm: '26px', md: '32px' },
            }}>
            How It Works
          </Typography>
        </Box>

        {/* Main Steps */}
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ my: 3 }}
          data-aos="fade-up"
          data-aos-delay="200">
          {/* Job Seeker */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
            <Box
              sx={{
                width: { xs: '80%' },
                background: '#fff',
                borderRadius: '20px',
                padding: '16px 16px 0 16px',
              }}>
              <Typography
                variant="h6"
                sx={{ color: '#F98149', fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                Job Seeker
              </Typography>
              <Box
                component="img"
                src={JobSeekerIcon}
                alt="Job Seeker"
                sx={{ width: 'auto', height: 'auto' }}
              />
            </Box>

            {!isSmallScreen ? (
              <KeyboardDoubleArrowRightIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            ) : (
              <KeyboardDoubleArrowDownIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            )}
          </Grid>

          {/* Step 1 */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
            <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', fontSize: 28 }}>
                01
              </Typography>
              <Box
                component="img"
                src={StepIcon1}
                alt="Step 1"
                sx={{
                  width: '60px',
                  height: '60px',
                  border: '3px solid #FF8B36',
                  padding: 4,
                  borderRadius: '20px',
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: '#FDFDFD', textAlign: 'center', mt: 2, fontSize: 16 }}>
                Assessment aptitude test <br /> Interview
              </Typography>
            </Grid>
            {!isSmallScreen ? (
              <KeyboardDoubleArrowRightIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            ) : (
              <KeyboardDoubleArrowDownIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: { sm: 'relative' },
                top: 40,
              }}>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', fontSize: 28 }}>
                02
              </Typography>
              <Box
                component="img"
                src={StepIcon2}
                alt="Step 1"
                sx={{
                  width: '60px',
                  height: '60px',
                  border: '3px solid #FF8B36',
                  padding: 4,
                  borderRadius: '20px',
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: '#FDFDFD', textAlign: 'center', mt: 2, fontSize: 16 }}>
                Hands on Practice Scenarios, Test Cases
              </Typography>
            </Grid>
            {!isSmallScreen ? (
              <KeyboardDoubleArrowRightIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            ) : (
              <KeyboardDoubleArrowDownIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
            <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', fontSize: 28 }}>
                03
              </Typography>
              <Box
                component="img"
                src={StepIcon3}
                alt="Step 1"
                sx={{
                  width: '60px',
                  height: '60px',
                  border: '3px solid #FF8B36',
                  padding: 4,
                  borderRadius: '20px',
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: '#FDFDFD', textAlign: 'center', mt: 2, fontSize: 16 }}>
                Soft Skills & Business Training
              </Typography>
            </Grid>
            {!isSmallScreen ? null : (
              <KeyboardDoubleArrowDownIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            )}
            {/* <KeyboardDoubleArrowRightIcon sx={{ fontSize: 44, color: '#F98149' }} /> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: { sm: 'relative' },
                top: 40,
              }}>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', fontSize: 28 }}>
                04
              </Typography>
              <Box
                component="img"
                src={StepIcon4}
                alt="Step 1"
                sx={{
                  width: '60px',
                  height: '60px',
                  border: '3px solid #FF8B36',
                  padding: 4,
                  borderRadius: '20px',
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: '#FDFDFD', textAlign: 'center', mt: 2, fontSize: 16 }}>
                Daily, Weekly, Monthly Assessments
              </Typography>
            </Grid>
            {!isSmallScreen ? (
              <KeyboardDoubleArrowRightIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            ) : (
              <KeyboardDoubleArrowDownIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
            <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', fontSize: 28 }}>
                05
              </Typography>
              <Box
                component="img"
                src={StepIcon5}
                alt="Step 1"
                sx={{
                  width: '60px',
                  height: '60px',
                  border: '3px solid #FF8B36',
                  padding: 4,
                  borderRadius: '20px',
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: '#FDFDFD', textAlign: 'center', mt: 2, fontSize: 16 }}>
                Real Time Project Hackathons
              </Typography>
            </Grid>
            {!isSmallScreen ? (
              <KeyboardDoubleArrowRightIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            ) : (
              <KeyboardDoubleArrowDownIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: { sm: 'relative' },
                top: 40,
              }}>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', fontSize: 28 }}>
                06
              </Typography>
              <Box
                component="img"
                src={StepIcon6}
                alt="Step 1"
                sx={{
                  width: '60px',
                  height: '60px',
                  border: '3px solid #FF8B36',
                  padding: 4,
                  borderRadius: '20px',
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: '#FDFDFD', textAlign: 'center', mt: 2, fontSize: 16 }}>
                Assessment Guidance & Monitoring
              </Typography>
            </Grid>
            {!isSmallScreen ? (
              <KeyboardDoubleArrowRightIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            ) : (
              <KeyboardDoubleArrowDownIcon
                sx={{ fontSize: 48, color: '#F98149', ml: { md: 1 }, mt: { xs: 2 } }}
              />
            )}
          </Grid>

          {/* Employed */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
            <Box
              sx={{
                background: '#fff',
                borderRadius: '6px',
                padding: '16px',
                width: { xs: '80%' },
              }}>
              <Typography
                variant="h6"
                sx={{ color: '#F98149', fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                Employed
              </Typography>
              <Box
                component="img"
                src={EmployedIcon}
                alt="Job Seeker"
                sx={{ width: 'auto', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
