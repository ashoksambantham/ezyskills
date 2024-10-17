import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Avatar,
  Card,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HeaderBlue from '../../Components/Header/headerBlue';
import Footer from '../../Components/Footer/footer';
import AboutUsImg from '../../assets/img/About2.jpg';
import StoryImg from '../../assets/img/Story.png';
import MissionImg from '../../assets/img/Mission.png';
import VisionImg from '../../assets/img/vision.png';
import Team1 from '../../assets/img/Ceo.png';
import Team2 from '../../assets/img/CTO.png';
import Team3 from '../../assets/img/Team1.png';
import Team4 from '../../assets/img/Team2.png';
import Team5 from '../../assets/img/Team3.png';
import Team6 from '../../assets/img/Team4.png';
// Mock team members for demonstration
const teamMembers = [
  { name: 'John Doe', role: 'CEO', img: Team1 },
  { name: 'Jane Smith', role: 'CTO', img: Team2 },
  { name: 'Mark Adams', role: 'COO', img: Team3 },
];

const teamMembers1 = [
  { name: 'John Doe', role: 'CEO', img: Team4 },
  { name: 'Jane Smith', role: 'CTO', img: Team5 },
  { name: 'Mark Adams', role: 'COO', img: Team6 },
];
const AboutUs = () => {
  return (
    <>
      <HeaderBlue />
      <Box sx={{ backgroundColor: '#003F7D', borderBottomLeftRadius: '100px' }}>
        <Container maxWidth="lg" sx={{ borderBottomLeftRadius: '100px' }}>
          {/* Images Section */}
          <Grid container spacing={3} sx={{ pt: 8 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 6, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, color: '#F98149' }}
                  data-aos="fade-up"
                  data-aos-delay="100">
                  ABOUT US
                </Typography>
                <Typography
                  data-aos="fade-up"
                  data-aos-delay="200"
                  variant="h4"
                  sx={{
                    mt: 2,
                    fontWeight: 600,
                    color: '#fff',
                    fontSize: { xs: '32px', sm: '48px', md: '68px' },
                  }}>
                  The Platform <br />
                  For The Next Billion Learners
                </Typography>
                <Typography
                  data-aos="fade-up"
                  data-aos-delay="200"
                  variant="body1"
                  sx={{ color: '#B0B6C3', mt: 2, fontWeight: 24 }}>
                  Transforming tech education for the <br />
                  next generation of students & employees
                </Typography>
              </Box>
            </Grid>

            <Grid
              xs={12}
              md={6}
              sx={{ my: { xs: 3 }, display: 'flex' }}
              data-aos="fade-up"
              data-aos-delay="100">
              <Box
                component="img"
                src={AboutUsImg}
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
      </Box>
      <Box sx={{ backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          {/* Images Section */}
          <Grid container spacing={3} sx={{ py: 8 }}>
            <Grid
              xs={12}
              md={6}
              sx={{ my: { xs: 3 }, display: 'flex' }}
              data-aos="fade-up"
              data-aos-delay="100">
              <Box
                component="img"
                src={StoryImg}
                alt="Skill Development"
                sx={{
                  width: { xs: '80%', md: '100%' }, // Full width in its container
                  height: '100%', // Maintain aspect ratio
                  borderRadius: { xs: '8px', md: '10px' }, // Slight radius for responsiveness
                  objectFit: 'contain',
                  mx: 'auto',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Our Story Section */}
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  sx={{ color: '#003F7D', fontSize: 28, fontWeight: 'bold' }}
                  data-aos="fade-up"
                  data-aos-delay="100">
                  OUR STORY
                </Typography>
                <Typography
                  variant="h5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  sx={{
                    color: '#F98149',
                    fontWeight: 600,
                    fontSize: { xs: '32px', sm: '48px', md: '68px' },
                  }}>
                  Innovating new ways to train students
                </Typography>
                <Typography
                  data-aos="fade-up"
                  data-aos-delay="300"
                  variant="body1"
                  sx={{ mt: 2, color: '#575757', fontSize: 24 }}>
                  We see no limits to what we can achieve by harnessing our individual and
                  collective strengths. We are changing the world with our ideas, insights, and
                  unique perspectives.
                  <br />
                  <br />
                  Our innovation is led by data, curiosity, and the occasional happy accident. We
                  create an uplifting environment where we learn from our failures and celebrate our
                  success.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Mission & Vision Section */}
      <Box sx={{ backgroundColor: '#04345f', color: 'white', padding: '60px 0', height: 'auto' }}>
        <Container>
          <Grid container justifyContent="center" spacing={4}>
            {/* Mission Section */}
            <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="100">
              <Box textAlign="center">
                {/* Replace this img tag with your desired Mission icon */}
                <Box
                  component="img"
                  src={MissionImg}
                  alt="Mission Icon"
                  sx={{ width: '220px', marginBottom: '20px' }}
                />
                <Box component="div">
                  <Typography
                    variant="span"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: '#fff',
                      fontSize: { xs: '32px', sm: '48px', md: '68px' },
                    }}>
                    Our {''}
                    <Typography
                      variant="span"
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: '#F98149',
                        fontSize: { xs: '32px', sm: '48px', md: '68px' },
                      }}>
                      Mission
                    </Typography>
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  color="white"
                  mt={2}
                  sx={{ color: '#FDFDFD', textAlign: 'center' }}>
                  Provide practice-based skill trainings using a unique teaching methodology & skill
                  platform to enhance the right skills required in an industry for working
                  professionals, Non-Tech professionals, College students & Start-ups through new
                  skilling, upskilling, and reskilling.
                </Typography>
              </Box>
            </Grid>

            {/* Vision Section */}
            <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="100">
              <Box textAlign="center">
                {/* Replace this img tag with your desired Vision icon */}
                <Box
                  component="img"
                  src={VisionImg}
                  alt="Vision Icon"
                  sx={{ width: '220px', marginBottom: '20px' }}
                />
                <Box component="div">
                  <Typography
                    variant="span"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: '#fff',
                      fontSize: { xs: '32px', sm: '48px', md: '68px' },
                    }}>
                    Our {''}
                    <Typography
                      variant="span"
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: '#F98149',
                        fontSize: { xs: '32px', sm: '48px', md: '68px' },
                      }}>
                      Vision
                    </Typography>
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  color="white"
                  mt={2}
                  sx={{ color: '#FDFDFD', textAlign: 'center' }}>
                  To transform into a right employee by imparting industry-suited IT skills in a
                  corporate office working environment with a holistic approach.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Box
            data-aos="fade-up"
            data-aos-delay="100"
            component="div"
            sx={{
              textAlign: 'center',
              mb: 3,
            }}>
            <Typography
              variant="span"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#003F7D',
                fontSize: { xs: '32px', sm: '48px', md: '68px' },
              }}>
              Our {''}
              <Typography
                variant="span"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: '#F98149',
                  fontSize: { xs: '32px', sm: '48px', md: '68px' },
                }}>
                Team
              </Typography>
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid
                item
                key={index}
                xs={12}
                md={3}
                sx={{ textAlign: 'center' }}
                data-aos="fade-up"
                data-aos-delay="200">
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{ width: 200, height: 200, margin: '0 auto', mb: 2 }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2">{member.role}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ py: 6 }}>
          <Box
            data-aos="fade-up"
            data-aos-delay="100"
            component="div"
            sx={{
              textAlign: 'center',
              mb: 3,
            }}>
            <Typography
              variant="span"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#003F7D',
                fontSize: { xs: '32px', sm: '48px', md: '68px' },
              }}>
              Our {''}
              <Typography
                variant="span"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: '#F98149',
                  fontSize: { xs: '32px', sm: '48px', md: '68px' },
                }}>
                Advisors
              </Typography>
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers1.map((member, index) => (
              <Grid
                item
                key={index}
                xs={12}
                md={3}
                sx={{ textAlign: 'center' }}
                data-aos="fade-up"
                data-aos-delay="200">
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{ width: 200, height: 200, margin: '0 auto', mb: 2 }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2">{member.role}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Box sx={{ my: 8 }} />
      <Footer />
    </>
  );
};

export default AboutUs;
