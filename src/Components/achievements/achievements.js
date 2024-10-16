import React from 'react';
import { Box, Grid, Typography, Paper, Container, IconButton } from '@mui/material';
import Achievement from '../../assets/img/Achievement.png';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { PureIncrement, PureDecrement } from 'pure_counter';
const Achievements = () => {
  return (
    <Box sx={{ padding: { xs: '20px', md: '40px' }, backgroundColor: '#F3F3F3' }}>
      {/* Header Section Outside Container */}
      <Typography
        data-aos="fade-up"
        data-aos-delay="100"
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '28px', sm: '36px', md: '44px', lg: '53px' },
          color: '#003F7D',
          textAlign: 'center',
          mb: { xs: 2, md: 4 }, // Responsive margin bottom
        }}>
        Our <span style={{ color: '#F98149' }}>Achievements</span>
      </Typography>

      {/* Wrapping the rest of the content inside the Container */}
      <Container>
        <Grid container spacing={2} sx={{ mt: { xs: 2, md: 4 } }} alignItems="center">
          {/* Left Image Section */}
          <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
            <Box
              component="img"
              src={Achievement}
              alt="Achievement"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </Grid>

          {/* Right Stats Section */}
          <Grid
            item
            xs={12}
            md={6}
            container
            spacing={3}
            justifyContent="center"
            alignItems="center">
            <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-delay="200">
              <Paper
                elevation={3}
                sx={{
                  textAlign: 'center',
                  padding: { xs: '15px', sm: '20px' }, // Responsive padding
                  borderRadius: '12px',
                }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#F98149',
                    fontWeight: 'bold',
                    fontSize: { xs: '28px', sm: '36px', md: '48px' }, // Responsive font size
                  }}>
                  100 +
                </Typography>
                {/* <PureIncrement start={0} end={10} duration={1} /> */}
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive text size
                  }}>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="icon"
                    sx={{ marginRight: '5px' }}>
                    <PersonIcon />
                  </IconButton>
                  Students Trained
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-delay="200">
              <Paper
                elevation={3}
                sx={{
                  padding: { xs: '15px', sm: '20px' },
                  textAlign: 'center',
                  borderRadius: '12px',
                }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#F98149',
                    fontWeight: 'bold',
                    fontSize: { xs: '28px', sm: '36px', md: '48px' },
                  }}>
                  50
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                  }}>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="icon"
                    sx={{ marginRight: '5px' }}>
                    <MenuBookIcon />
                  </IconButton>
                  Courses Available
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} data-aos="fade-up" data-aos-delay="300">
              <Paper
                elevation={3}
                sx={{
                  padding: { xs: '15px', sm: '20px' },
                  textAlign: 'center',
                  borderRadius: '12px',
                }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#003F7D',
                    fontWeight: 'bold',
                    fontSize: { xs: '28px', sm: '36px', md: '48px' },
                  }}>
                  70%
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                  }}>
                  Students Secured Jobs in Level 1 Companies
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;
