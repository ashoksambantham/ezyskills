import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Container,
  CardMedia,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import AngularJS from '../../assets/img/Angular.png';
import Aws from '../../assets/img/Aws.png';
import Vue from '../../assets/img/Vue.png';
import PowerBi from '../../assets/img/PowerBi.png';
import Python from '../../assets/img/Python.png';
import ReactJsLogo from '../../assets/img/React Js.png';
import Selenium from '../../assets/img/Selenium.png';
import CoreUiImg from '../../assets/img/CoreUi.png';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PushPinIcon from '@mui/icons-material/PushPin';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
const courses = [
  {
    title: 'Angular JS',
    description: 'A JavaScript-based open-source front-end... ',
    logo: AngularJS,
  },
  { title: 'AWS', description: 'AWS Coaching and Certification helps...', logo: Aws },
  { title: 'Vue JS', description: 'An open-source model-view-viewmodel...', logo: Vue },
  {
    title: 'Power BI',
    description: 'An interactive data visualization software...',
    logo: PowerBi,
  },
  {
    title: 'Python',
    description: 'Python is an interpreted high-level...',
    logo: Python,
  },
  {
    title: 'React JS',
    description: 'React is a free and open-source front-end...',
    logo: ReactJsLogo,
  },
  {
    title: 'Software Testing',
    description: 'The process of evaluating and verifying...',
    logo: Selenium,
  },
  {
    title: 'Core UI',
    description: 'Learn the fastest way to build a modern...',
    logo: CoreUiImg,
  },
];

export default function PopularCourses() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold' }}
        data-aos="fade-up"
        data-aos-delay="100">
        Popular <span style={{ color: '#FF6600' }}>Courses</span>
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        {courses.map((course, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            xl={3}
            key={index}
            data-aos="zoom-in"
            data-aos-delay="200">
            <Card
              sx={{
                backgroundColor: '#003F7D',
                color: 'white',
                borderRadius: 3,
                marginBottom: '50px',
                overflow: 'visible',
              }}>
              <Box sx={{ textAlign: 'center', padding: '20px 16px 0' }}>
                <Box
                  component="img"
                  src={course.logo}
                  alt={`${course.title} logo`}
                  sx={{
                    width: { xs: '70px', lg: '90px' },
                    height: { xs: '70px', lg: '90px' },
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* White background wrapping title, description, and buttons */}
              <Box
                sx={{
                  backgroundColor: 'white',
                  padding: 2,
                  borderRadius: 3,
                  margin: '0 auto',
                  width: '80%',
                  transform: 'translateY(20%)',
                }}>
                <CardContent sx={{ width: '100%' }}>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: 'bold', color: '#171725', fontSize: 24 }}>
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ marginTop: '2px', color: '#003366' }}>
                    {course.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', flexDirection: 'row' }}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: '#FFf',
                      color: '#575757',
                      border: '1px solid #F98149',
                      fontSize: 12,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}>
                    <LiveTvIcon sx={{ color: '#F98149', paddingRight: '4px' }} />

                    <Box component="span" sx={{ textTransform: 'capitalize' }}>
                      {' '}
                      Live Demo
                    </Box>
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: '#FFf',
                      color: '#575757',
                      border: '1px solid #F98149',
                      fontSize: 12,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}>
                    <PushPinIcon sx={{ color: '#F98149', paddingRight: '3px' }} />
                    <Box component="span" sx={{ textTransform: 'capitalize' }}>
                      {' '}
                      Enroll Now
                    </Box>
                  </Button>
                </CardActions>

                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: '#F98149',
                      color: '#fff',
                      border: '1px solid #F98149',
                      fontSize: 12,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}>
                    <CloudDownloadOutlinedIcon sx={{ color: '#fff', paddingRight: '3px' }} />
                    <Box component="span" sx={{ textTransform: 'capitalize' }}>
                      {' '}
                      Download Curriculum
                    </Box>
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: 4 }} data-aos="fade-up" data-aos-delay="100">
        <Button variant="contained" sx={{ backgroundColor: '#003366', color: 'white' }}>
          View All Courses
        </Button>
      </Box>
    </Container>
  );
}
