import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  Link,
  Divider,
} from '@mui/material';
// import {
//   Google as GoogleIcon,
//   Facebook as FacebookIcon,
//   Apple as AppleIcon,
// } from '@mui/icons-material';
import Header from '../../Components/Header/header';
import LoginBanner from '../../assets/img/loginBanner.png';
import GoogleIcon from '../../assets/img/Google.png';
import FaceBookIcon from '../../assets/img/FaceBook.png';
import AppleIcon from '../../assets/img/Apple.png';
import Footer from '../../Components/Footer/footer';
const CreateAccount = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 5, my: 3 }}>
        <Grid container columnSpacing={{ xs: 0, sm: 0, md: 2 }}>
          {/* Form Section */}
          <Grid
            data-aos="fade-up"
            data-aos-delay="100"
            item
            xs={12}
            md={5}
            sx={{
              borderRadius: '43px',
              backgroundColor: '#FDFDFD',
              boxShadow: 3,
              padding: '24px 8px',
            }}>
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: '#003F7D', fontWeight: 'bold', textAlign: 'center' }}>
                Create <span style={{ color: '#FF8B36' }}>Account</span>
              </Typography>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                margin="normal"
                InputProps={{
                  sx: {
                    '& fieldset': {
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      borderBottom: '1px solid #B1B1B1', // Default bottom border
                    },
                    '&.Mui-focused fieldset': {
                      borderBottom: '1px solid #FF8B36 !important', // Ensure no blue border on focus
                    },
                    '&:hover fieldset': {
                      borderBottom: '1px solid #FF8B36', // Orange bottom border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderBottom: '1px solid #FF8B36', // Orange bottom border when focused
                    },
                    '& .MuiOutlinedInput-root': {
                      color: '#FF8B36', // Text color inside input
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: '#B1B1B1', // Default label color
                    fontSize: '18px', // Label font size
                    '&.Mui-focused': {
                      color: '#FF8B36', // Orange label color when focused
                    },
                  },
                }}
                sx={{ backgroundColor: '#f5f5f5', marginTop: 2 }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                InputProps={{
                  sx: {
                    '& fieldset': {
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      borderBottom: '1px solid #B1B1B1', // Default bottom border
                    },
                    '&.Mui-focused fieldset': {
                      borderBottom: '1px solid #FF8B36 !important', // Ensure no blue border on focus
                    },
                    '&:hover fieldset': {
                      borderBottom: '1px solid #FF8B36', // Orange bottom border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderBottom: '1px solid #FF8B36', // Orange bottom border when focused
                    },
                    '& .MuiOutlinedInput-root': {
                      color: '#FF8B36', // Text color inside input
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: '#B1B1B1', // Default label color
                    fontSize: '18px', // Label font size
                    '&.Mui-focused': {
                      color: '#FF8B36', // Orange label color when focused
                    },
                  },
                }}
                sx={{ backgroundColor: '#f5f5f5', marginTop: 2 }}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                InputProps={{
                  sx: {
                    '& fieldset': {
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      borderBottom: '1px solid #B1B1B1', // Default bottom border
                    },
                    '&.Mui-focused fieldset': {
                      borderBottom: '1px solid #FF8B36 !important', // Ensure no blue border on focus
                    },
                    '&:hover fieldset': {
                      borderBottom: '1px solid #FF8B36', // Orange bottom border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderBottom: '1px solid #FF8B36', // Orange bottom border when focused
                    },
                    '& .MuiOutlinedInput-root': {
                      color: '#FF8B36', // Text color inside input
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: '#B1B1B1', // Default label color
                    fontSize: '18px', // Label font size
                    '&.Mui-focused': {
                      color: '#FF8B36', // Orange label color when focused
                    },
                  },
                }}
                sx={{ backgroundColor: '#f5f5f5', marginTop: 2 }}
              />

              <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                <Checkbox />
                <Typography variant="body2" sx={{ color: '#B1B1B1', fontSize: 14 }}>
                  Remember Me
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  display: 'block',
                  margin: '0 auto',
                  textTransform: 'capitalize',
                  backgroundColor: '#003F7D',
                  color: '#fff',
                  py: 1.5,
                  '&:hover': { backgroundColor: '#083b6e' },
                }}>
                Create Account
              </Button>
              <Typography variant="body2" align="center" sx={{ mt: 1, color: '#B1B1B1' }}>
                Already Created?{' '}
                <Button sx={{ color: '#FF8B36', textTransform: 'capitalize' }}>Login Here</Button>
              </Typography>

              <Divider sx={{ my: 1 }}>or</Divider>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  mb: 1,
                  flexDirection: { xs: 'column', lg: 'row' },
                }}>
                <Box
                  component="button"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'center' },
                    borderColor: '#F3F3F3',
                    backgroundColor: '#F3F3F3',
                    padding: '0 24px',
                    border: 'none',
                    borderRadius: '8px',
                    margin: { xs: '8px 0' },
                  }}>
                  <Box component="img" src={GoogleIcon} />
                  <Button
                    variant="outlined"
                    sx={{ textTransform: 'capitalize', border: 'none', color: '#8A8A8A' }}>
                    Sign in
                  </Button>
                </Box>
                <Box
                  component="button"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: { xs: 'center' },
                    borderColor: '#3575DC',
                    backgroundColor: '#3575DC',
                    padding: '2px 24px',
                    border: 'none',
                    borderRadius: '8px',
                    margin: { xs: '8px 0' },
                  }}>
                  <Box component="img" src={FaceBookIcon} sx={{ width: '28px', height: '28px' }} />
                  <Button
                    variant="outlined"
                    sx={{ textTransform: 'capitalize', border: 'none', color: '#fff' }}>
                    Sign in
                  </Button>
                </Box>
                <Box
                  component="button"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'center' },
                    borderColor: '#404040',
                    backgroundColor: '#404040',
                    padding: { xs: 0, md: '0 24px' },
                    border: 'none',
                    borderRadius: '8px',
                    margin: { xs: '8px 0' },
                  }}>
                  <Box component="img" src={AppleIcon} />
                  <Button
                    variant="outlined"
                    sx={{ textTransform: 'capitalize', border: 'none', color: '#fff' }}>
                    Sign in
                  </Button>
                </Box>
                {/* <Button
                  variant="outlined"
                  startIcon={<FaceBookIcon />}
                  sx={{ mb: 1, borderColor: '#ddd', color: '#3b5998' }}>
                  Sign in
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<AppleIcon />}
                  sx={{ borderColor: '#ddd', color: '#000' }}>
                  Sign in
                </Button> */}
              </Box>

              <Typography variant="body2" align="center" sx={{ mt: 1, color: '#4E4D4D' }}>
                By continuing, you agree to the{' '}
                <Link href="#" sx={{ color: '#FF8B36' }}>
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" sx={{ color: '#FF914C' }}>
                  Privacy Policy
                </Link>
                .
              </Typography>
            </Box>
          </Grid>

          {/* Illustration Section */}
          <Grid item xs={12} md={7} data-aos="fade-up" data-aos-delay="100">
            <Box
              component="img"
              src={LoginBanner}
              sx={{
                marginTop: { xs: '20px', md: '0' },
                height: '100%',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ my: 8 }} />

      <Footer />
    </>
  );
};

export default CreateAccount;
