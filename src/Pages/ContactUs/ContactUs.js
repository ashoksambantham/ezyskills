import React, { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Container,
} from '@mui/material';
import HeaderOrange from '../../Components/Header/headerOrange';
import Footer from '../../Components/Footer/footer';
const ContactUs = () => {
  const [issue, setIssue] = useState('');

  const handleIssueChange = (event) => {
    setIssue(event.target.value);
  };

  return (
    <>
      <HeaderOrange />
      <Box sx={{ backgroundColor: '#F98149' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff' }}>
              Contact Our Team
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          mb: 10,
          backgroundColor: '#F98149',
          py: 2,
        }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: { xs: '20px', md: '80px' },
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              margin: 'auto',
              mt: 5,
            }}>
            <Box sx={{ mb: 1, width: '100%' }}>
              <Typography variant="h5" sx={{ textAlign: 'left', color: '#003F7D' }}>
                For all enquiries, Please contact us usign the form below
              </Typography>
            </Box>

            <Box sx={{ width: '100%' }}>
              {/* Name and Email */}
              <Box
                data-aos="fade-up"
                data-aos-delay="100"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',

                  flexDirection: { xs: 'column' },
                }}>
                <TextField
                  label="Enter Your name *"
                  variant="outlined"
                  fullWidth
                  sx={{
                    margin: { xs: '10px 0', md: '10px 10px' },
                    '& .MuiInputLabel-root': {
                      color: '#003F7D', // Label color
                      fontSize: '18px', // Label font size
                    },
                    '& .MuiOutlinedInput-root': {
                      '&::placeholder': {
                        color: '#959EAD', // Placeholder color
                        opacity: 1,
                      },
                    },
                  }}
                />
                <TextField
                  label="Enter Your Email *"
                  variant="outlined"
                  fullWidth
                  type="email"
                  sx={{
                    margin: { xs: '10px 0', md: '10px 10px' },
                    '& .MuiInputLabel-root': {
                      color: '#003F7D', // Label color
                      fontSize: '18px', // Label font size
                    },
                    '& .MuiOutlinedInput-root': {
                      '&::placeholder': {
                        color: '#959EAD', // Placeholder color
                        opacity: 1,
                      },
                    },
                  }}
                />
              </Box>

              {/* Phone Number and Issue Related */}
              <Box
                data-aos="fade-up"
                data-aos-delay="100"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: { xs: 0, md: 3 },
                  flexDirection: { xs: 'column' },
                }}>
                <TextField
                  label="Enter Your Phone Number *"
                  variant="outlined"
                  type="email"
                  fullWidth
                  sx={{
                    margin: { xs: '10px 0', md: '10px' },
                    '& .MuiInputLabel-root': {
                      color: '#003F7D', // Label color
                      fontSize: '18px', // Label font size
                    },
                    '& .MuiOutlinedInput-root': {
                      '&::placeholder': {
                        color: '#959EAD', // Placeholder color
                        opacity: 1,
                      },
                    },
                  }}
                />
                <FormControl fullWidth sx={{ margin: { xs: '10px 0', md: '10px' } }}>
                  <InputLabel
                    sx={{
                      color: '#003F7D', // Label color
                      fontSize: '18px',
                    }}>
                    Issue Related to*
                  </InputLabel>
                  <Select
                    value={issue}
                    label="Issue Related to *"
                    onChange={handleIssueChange}
                    sx={{
                      color: '#003F7D', // Label color
                      fontSize: '18px',
                    }}>
                    <MenuItem value="Course Structure">Course Structure</MenuItem>
                    <MenuItem value="Payment Failure">Payment Failure</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Message */}
              <Box data-aos="fade-up" data-aos-delay="200" sx={{ marginBottom: '20px' }}>
                <TextField
                  label="Enter Your message"
                  variant="outlined"
                  multiline
                  rows={4}
                  type="email"
                  fullWidth
                  sx={{
                    margin: { xs: '10px 0', md: '0 10px' },
                    '& .MuiInputLabel-root': {
                      color: '#003F7D', // Label color
                      fontSize: '18px', // Label font size
                    },
                    '& .MuiOutlinedInput-root': {
                      '&::placeholder': {
                        color: '#959EAD', // Placeholder color
                        opacity: 1,
                      },
                    },
                  }}
                />
              </Box>
              {/* Terms and Conditions */}
              <Typography
                data-aos="fade-up"
                data-aos-delay="300"
                variant="body2"
                color="textSecondary"
                sx={{ margin: '20px 0', textAlign: 'center', color: '#5A7184', fontSize: 14 }}>
                By submitting this form you agree to our terms and conditions and our Privacy Policy
                which explains how we may collect, use, and disclose your personal information
                including to third parties.
              </Typography>
              {/* Submit Button */}
              <Button
                data-aos="fade-up"
                data-aos-delay="300"
                variant="contained"
                sx={{
                  marginTop: 2,
                  backgroundColor: '#003F7D',
                  color: '#FFFFFF',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  width: {
                    xs: '100%', // Full width on extra small and small screens
                    md: 'auto', // Only required width on medium screens and above
                  },
                  height: '50px',
                  display: 'block',
                  margin: '0 auto',
                }}>
                Send a Message
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ my: 8 }} />
      <Footer />
    </>
  );
};

export default ContactUs;
