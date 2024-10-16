import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Divider,
  Link,
} from '@mui/material';
import { School, Engineering, Code, Person } from '@mui/icons-material';

const CourseSelector = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 5 }}>
      <Container>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#0A468A' }}>
          Choose The <span style={{ color: '#FF7324' }}>Course</span>
        </Typography>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} md={8}>
            <Box sx={{ backgroundColor: '#0A468A', p: 4, borderRadius: 2 }}>
              {/* Chat bubbles and options */}
              <Box sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="body1">
                  Welcome, Prasad. Let us know your current status?
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#0A468A',
                      color: '#fff',
                      py: 2,
                      borderRadius: 2,
                      '&:hover': { backgroundColor: '#083b6e' },
                    }}
                    startIcon={<Person />}>
                    Looking For Job
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#0A468A',
                      color: '#fff',
                      py: 2,
                      borderRadius: 2,
                      '&:hover': { backgroundColor: '#083b6e' },
                    }}
                    startIcon={<Engineering />}>
                    IT to Non IT Job Shift
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#0A468A',
                      color: '#fff',
                      py: 2,
                      borderRadius: 2,
                      '&:hover': { backgroundColor: '#083b6e' },
                    }}
                    startIcon={<School />}>
                    Upskill IT Job
                  </Button>
                </Grid>
              </Grid>

              <Box sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="body1">Select the field you’re interested</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#FF7324', color: '#fff', px: 4, py: 1.5 }}>
                  IT Field
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#fff',
                    color: '#fff',
                    px: 4,
                    py: 1.5,
                    '&:hover': { borderColor: '#FF7324', color: '#FF7324' },
                  }}>
                  Non IT Field
                </Button>
              </Box>

              <Box sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="body1">IT Field, then what do you prefer now?</Typography>
              </Box>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#0A468A',
                      color: '#fff',
                      py: 2,
                      borderRadius: 2,
                      '&:hover': { backgroundColor: '#083b6e' },
                    }}
                    startIcon={<Code />}>
                    Coding
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#0A468A',
                      color: '#fff',
                      py: 2,
                      borderRadius: 2,
                      '&:hover': { backgroundColor: '#083b6e' },
                    }}>
                    No Coding
                  </Button>
                </Grid>
              </Grid>

              <Box sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="body1">Wow, you chose coding. What’s next?</Typography>
              </Box>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#0A468A',
                      color: '#fff',
                      py: 2,
                      borderRadius: 2,
                      '&:hover': { backgroundColor: '#083b6e' },
                    }}>
                    Front End
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#0A468A',
                      color: '#fff',
                      py: 2,
                      borderRadius: 2,
                      '&:hover': { backgroundColor: '#083b6e' },
                    }}>
                    Back End
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#0A468A',
                      color: '#fff',
                      py: 2,
                      borderRadius: 2,
                      '&:hover': { backgroundColor: '#083b6e' },
                    }}>
                    Full Stack
                  </Button>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{ backgroundColor: '#FF7324', color: '#fff', py: 1.5 }}>
                Next
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            {/* Placeholder for illustration */}
            <Box
              sx={{
                height: '100%',
                backgroundImage: 'url(https://via.placeholder.com/300)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box sx={{ backgroundColor: '#0A468A', color: '#fff', py: 4, mt: 5 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                EZY Skills
              </Typography>
              <Typography variant="body1" gutterBottom>
                Let us build your career together. Be the first person to transform yourself with
                our unique & world-class corporate level trainings.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              {['Home', 'Course Selector', 'Courses', 'Pricing', 'FAQ', 'Contact Us'].map(
                (text, index) => (
                  <Link
                    href="#"
                    key={index}
                    color="inherit"
                    underline="none"
                    display="block"
                    sx={{ py: 0.5, '&:hover': { textDecoration: 'underline' } }}>
                    {text}
                  </Link>
                )
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2">
                Navakethan Complex, 6th Floor, 605, 606 A&P opp, Clock Tower, SD Road, Secunderabad,
                Telangana 500003
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                info@ezyskills.in
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                +91 8428448903, +91 9475484959
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CourseSelector;
