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
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Apple as AppleIcon,
} from '@mui/icons-material';

const CreateAccount = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {/* Form Section */}
        <Grid item xs={12} md={5}>
          <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#0A468A', fontWeight: 'bold' }}>
              Create <span style={{ color: '#FF7324' }}>Account</span>
            </Typography>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
              <Checkbox />
              <Typography variant="body2">Remember Me</Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#0A468A',
                color: '#fff',
                py: 1.5,
                '&:hover': { backgroundColor: '#083b6e' },
              }}>
              Create Account
            </Button>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already Created?{' '}
              <Link href="#" sx={{ color: '#0A468A' }}>
                Login Here
              </Link>
            </Typography>

            <Divider sx={{ my: 3 }}>or</Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ mb: 1, borderColor: '#ddd', color: '#555' }}>
              Sign in with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{ mb: 1, borderColor: '#ddd', color: '#3b5998' }}>
              Sign in with Facebook
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<AppleIcon />}
              sx={{ borderColor: '#ddd', color: '#000' }}>
              Sign in with Apple
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              By continuing, you agree to the{' '}
              <Link href="#" sx={{ color: '#FF7324' }}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" sx={{ color: '#FF7324' }}>
                Privacy Policy
              </Link>
              .
            </Typography>
          </Box>
        </Grid>

        {/* Illustration Section */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              height: '100%',
              backgroundImage: 'url(https://via.placeholder.com/600x400)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
            }}>
            {/* Placeholder for the illustration */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateAccount;
