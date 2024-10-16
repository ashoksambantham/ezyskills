import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slide1 from '../../assets/img/slide1.png';
import Slide2 from '../../assets/img/slide2.png';
import Slide3 from '../../assets/img/slide3.png';
import Slide4 from '../../assets/img/slide4.png';

const BannerWithCarousel = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '40px 0',
        }}>
        {/* Left Section */}
        <Box
          sx={{ flex: 1, paddingRight: { md: '20px' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h3"
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{
              fontWeight: 'bold',
              color: '#003F7D',
              fontSize: { xs: '32px', md: '48px', lg: '68px' },
            }}>
            World's First AI Based Online Learning Platform
            <Typography
              variant="h3"
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{
                fontWeight: 'bold',
                color: '#FF8B36',
                fontSize: { xs: '32px', md: '48px', lg: '68px' },
              }}>
              Online Learning Platform
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{
              color: '#A1A1A1',
              marginTop: '10px',
              fontSize: { xs: '18px', md: '24px', lg: '28px' },
            }}>
            AI Powered Learning for a Brighter Future
          </Typography>
        </Box>

        {/* Right Section - Carousel */}
        <Box
          data-aos="fade-up"
          data-aos-delay="100"
          sx={{
            flex: 1,
            marginTop: { xs: '20px', md: '0' },
            textAlign: 'center',
            position: 'relative',
          }}>
          <Carousel
            infiniteLoop
            autoPlay
            interval={3000}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}>
            <div>
              <img
                src={Slide1}
                alt="AI Based Course Selector"
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }}
              />
            </div>
            <div>
              <img
                src={Slide2}
                alt="AI Based Scenarios"
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }}
              />
            </div>
            <div>
              <img
                src={Slide3}
                alt="AI Based Scenarios"
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }}
              />
            </div>
            <div>
              <img
                src={Slide4}
                alt="AI Based Scenarios"
                style={{ width: '100%', borderRadius: '10px', height: 'auto' }}
              />
            </div>
          </Carousel>
        </Box>
      </Box>
    </Container>
  );
};

export default BannerWithCarousel;
