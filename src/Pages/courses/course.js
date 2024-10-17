import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
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
import PopularCourses from '../../Components/PopularCourses/PopularCourses';
const Course = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          sx={{
            my: 5,
            color: '#003F7D',
            fontSize: { xs: '28px', sm: '36px', md: '44px', lg: '53px' },
          }}>
          Courses <span style={{ color: '#FF8B36' }}>List</span>
        </Typography>
      </Container>

      <PopularCourses />
      <Box sx={{ my: 8 }} />
      <Footer />
    </>
  );
};

export default Course;
