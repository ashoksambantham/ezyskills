import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Container,
  IconButton,
} from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube, LocationOn } from '@mui/icons-material';

import FooterLogo from '../../assets/img/FooterLogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box sx={{ backgroundColor: '#003F7D', color: 'white', py: 6, px: 4 }}>
        <Container>
          <Grid container spacing={4}>
            {/* Logo and Description */}
            <Grid item xs={12} md={5}>
              <Box>
                {/* Company Logo */}
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 0,
                    flexGrow: {
                      xs: 1,
                      sm: 1,
                      md: 0,
                    },
                  }}>
                  <img src={FooterLogo} alt="Logo" height="60px" />
                </Typography>

                <Typography variant="body1" sx={{ mt: 3, color: '#fff' }}>
                  Let Us build your career together. Be the first person to transform yourself with
                  our unique & world-class corporate level trainings.
                </Typography>

                {/* Subscribe Section */}
                <Typography variant="h6" sx={{ mb: 1, color: '#fff', mt: 3 }}>
                  Subscribe Our Newsletter
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TextField
                    variant="outlined"
                    placeholder="Your Email address"
                    sx={{
                      input: { color: 'white' },
                      backgroundColor: '#1E5D99',
                      borderRadius: '4px 0 0 4px', // Rounded corners on the left only
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'transparent', // Remove the border
                      },
                      width: '100%', // Make sure the TextField expands fully
                    }}
                  />
                  <Button
                    sx={{
                      backgroundColor: '#F98149',
                      color: 'white',
                      minWidth: '50px',
                      height: '56px', // Match TextField height
                      borderRadius: '0 4px 4px 0', // Rounded corners on the right only
                      padding: '8px',
                      '&:hover': {
                        backgroundColor: '#F98149',
                      },
                    }}>
                    &gt;
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={3}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: 20, md: 24 }, // Responsive font size
                  fontWeight: 'bold',
                  color: '#fff',
                  mb: 2,
                }}>
                Quick{' '}
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: 20, md: 24 }, // Responsive font size
                    fontWeight: 'bold',
                    color: '#FF8B36',
                    mb: 2,
                  }}>
                  Links
                </Typography>
              </Typography>
              <Box sx={{ my: 2 }}>
                {[
                  'Home',
                  'Our Story',
                  'Best Courses',
                  "Your FAQ's",
                  'Cancellation & Refunds',
                  'Contact Us',
                ].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    color="#fff"
                    underline="none"
                    sx={{
                      display: 'block',
                      mb: 1,
                      '&:hover': { color: '#FF8B36' },
                      fontSize: { xs: '0.9rem', md: '1rem' }, // Responsive font size
                    }}>
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Contact Us */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: 20, md: 24 }, // Responsive font size
                  fontWeight: 'bold',
                  color: '#fff',
                  mb: 2,
                }}>
                Contact{' '}
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: 20, md: 24 }, // Responsive font size
                    fontWeight: 'bold',
                    color: '#FF8B36',
                    mb: 2,
                  }}>
                  Us
                </Typography>
              </Typography>
              <Box sx={{ display: 'flex', mb: 1, mt: 3 }}>
                <LocationOn sx={{ mr: 1 }} />
                <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  {' '}
                  {/* Responsive font size */}
                  Navakethan Complex, <br /> 6th Floor, 605, 606 A&P opp,
                  <br /> Clock Tower, SD Road,
                  <bt />
                  Secunderabad, Telangana 500003
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <Email sx={{ mr: 1 }} />
                <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  info@ezyskills.in
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Phone sx={{ mr: 1 }} />
                <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  +91 7708431580
                  <br />
                  +91 9475484959
                </Typography>
              </Box>

              {/* Social Icons */}
              <Box sx={{ display: 'flex', mt: 2 }}>
                {[Facebook, Twitter, Instagram, LinkedIn, YouTube].map((Icon, index) => (
                  <IconButton
                    key={index}
                    component={Link}
                    href="#"
                    sx={{
                      mr: 2,
                      color: '#fff',
                      '&:hover': { color: 'inherit' },
                    }}>
                    <Icon />
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Copyright Section */}
      <Box
        sx={{
          backgroundColor: '#FFF',
          color: '#003F7D',
          textAlign: 'center',
          padding: '20px',
          // marginTop: '20px',
        }}>
        <Typography variant="body2" sx={{ fontSize: { xs: 14, md: 24 } }}>
          {' '}
          {/* Responsive font size */}
          &copy; {currentYear} All rights reserved by Ezyskills
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
