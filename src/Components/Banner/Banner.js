import React, { useEffect } from 'react';
import { Box, Typography, TextField, Button, Chip, Container } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud'; // Example for cloud computing
import LaptopIcon from '@mui/icons-material/Laptop'; // Icon example for Data Analyst
import BannerImg from '../../assets/img/hero.png';
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          padding: { xs: '20px', md: '40px 0' },
          // mt: 1,
        }}>
        {/* Left Section */}
        <Box
          sx={{
            flex: 1,
            paddingRight: { md: '20px' },
            textAlign: { xs: 'center', md: 'left' },
          }}>
          <Typography
            variant="h3"
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{
              fontWeight: 'bold',
              color: '#003F7D',
              fontSize: { xs: '32px', sm: '48px', md: '68px' },
            }}>
            Skill Your Way Up To Success With Us
          </Typography>
          <Typography
            variant="subtitle1"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{
              color: '#A1A1A1',
              marginTop: '10px',
              fontSize: { xs: '16px', sm: '20px', md: '28px' },
            }}>
            Get the skills you need for the future of work.
          </Typography>

          {/* Search Bar */}
          <Box
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{
              marginTop: '20px',
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
            <TextField
              variant="outlined"
              placeholder="Search the course you want"
              sx={{
                width: { xs: '100%', md: '70%' },
                borderRadius: '12px',
                backgroundColor: '#F2F4F8',
                '& fieldset': {
                  border: 'none', // This removes the border
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: { xs: '10px 15px', sm: '10px 20px' },
                borderRadius: '12px',
                backgroundColor: '#023E8A',
                width: { xs: '100%', sm: 'auto' },
              }}>
              Search
            </Button>
          </Box>

          {/* Course Buttons */}
          <Box
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Chip
              label="Cloud Computing"
              color="warning"
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                padding: { xs: '8px 12px', sm: '10px 15px' },
                backgroundColor: '#FF914C',
                borderRadius: '6px',
                fontWeight: 'bold',
                color: '#fff',
              }}
            />
            <Chip
              label="Cyber Security"
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                padding: { xs: '8px 12px', sm: '10px 15px' },
                backgroundColor: '#F2F4F8',
                borderRadius: '6px',
                color: '#B9B5B2',
                fontWeight: 'bold',
              }}
            />
            <Chip
              label="DevOps"
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                padding: { xs: '8px 12px', sm: '10px 15px' },
                backgroundColor: '#F2F4F8',
                borderRadius: '6px',
                color: '#B9B5B2',
                fontWeight: 'bold',
              }}
            />
            <Chip
              label="Data Science"
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                padding: { xs: '8px 12px', sm: '10px 15px' },
                backgroundColor: '#F2F4F8',
                borderRadius: '6px',
                color: '#B9B5B2',
                fontWeight: 'bold',
              }}
            />
            <Chip
              label="Software Testing"
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                padding: { xs: '8px 12px', sm: '10px 15px' },
                backgroundColor: '#F2F4F8',
                borderRadius: '6px',
                color: '#B9B5B2',
                fontWeight: 'bold',
              }}
            />
          </Box>
        </Box>

        {/* Right Section */}
        <Box
          data-aos="fade-up"
          data-aos-delay="100"
          sx={{
            flex: 1,
            position: 'relative',
            marginTop: { xs: '20px', md: '0' },
            textAlign: 'center',
          }}>
          {/* Main Image */}
          <img
            src={BannerImg}
            alt="success-girl"
            style={{ maxWidth: '100%', borderRadius: '10px' }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Banner;
