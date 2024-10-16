import React from 'react';
import { Box, Card, Typography, Avatar, Grid, Button, Rating, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Trainer1 from '../../assets/img/Trainer1.png';
import Trainer2 from '../../assets/img/Trainer2.png';
import Trainer3 from '../../assets/img/Trainer3.png';
import Trophy from '../../assets/img/Trophy.png';
import ISO1 from '../../assets/img/ISO1.png';
import ISO2 from '../../assets/img/ISO2.png';
import ISO3 from '../../assets/img/ISO3.png';
import ISO4 from '../../assets/img/ISO4.png';
import Collab1 from '../../assets/img/Collab1.png';
import Collab2 from '../../assets/img/Collab2.png';
import Collab3 from '../../assets/img/Collab3.png';
import Collab4 from '../../assets/img/Collab4.png';
const MentorCard = ({ mentor }) => {
  return (
    <Card
      data-aos="zoom-in"
      data-aos-delay="100"
      sx={{
        padding: { xs: '12px 8px', sm: '24px 60px' },
        borderRadius: '30px',
        boxShadow: 3,
        margin: { xs: '10px 0', sm: '0 10px' },
        position: 'relative',
        overflow: 'visible',
      }}>
      {mentor.bestTrainer && (
        <Button
          sx={{
            backgroundColor: '#FF8B36',
            color: 'white',
            px: 2,
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: 1,
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          <Box
            component="img"
            src={Trophy}
            sx={{
              width: 30,
              height: 30,
              marginRight: '4px',
            }}
          />
          BEST TRAINER
        </Button>
      )}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
        <Avatar sx={{ width: 120, height: 120 }} src={mentor.profile} />
        <Box sx={{ xs: { ml: 1 }, sm: { ml: 2 } }}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: 28 }}>
            {mentor.name}
          </Typography>
          <Typography variant="body2" sx={{ color: '#FF8B36', fontSize: 18 }}>
            {mentor.specialization}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: { sm: 'center' },
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
            <Rating
              value={mentor.rating}
              precision={0.5}
              readOnly
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarIcon fontSize="inherit" />}
            />
            <Typography variant="body2" color="text.secondary" sx={{ sm: { ml: '4px' } }}>
              {mentor.reviews} Reviews
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: '4px' }}>
            {mentor.modules} Modules | {mentor.students} Students
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ mt: 2, color: '#575757', fontSize: 18 }}>
          {mentor.description}
        </Typography>
      </Box>
    </Card>
  );
};

const Certifications = () => {
  const certs = [
    { title: 'ISO 27001', color: '#6b4ce8', certificate: ISO1 },
    { title: 'ISO 9001', color: '#2360e4', certificate: ISO2 },
    { title: 'ISO 20000-1', color: '#33b653', certificate: ISO3 },
    { title: 'ISO 29993', color: '#f5445c', certificate: ISO4 },
  ];

  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        data-aos="fade-up"
        data-aos-delay="100"
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '28px', sm: '36px', md: '44px', lg: '53px' },
          color: '#003F7D',
          textAlign: 'center',
          mb: { xs: 2, md: 4 }, // Responsive margin bottom
        }}>
        Our <span style={{ color: '#F98149' }}>Certifications</span>
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        {certs.map((cert) => (
          <Grid
            item
            key={cert.title}
            sx={{ display: 'flex', flexWrap: 'wrap' }}
            data-aos="fade-up"
            data-aos-delay="200">
            <Box
              component="img"
              src={cert.certificate}
              sx={{
                padding: 5,
                width: 150,
                height: 150,

                borderRadius: '50%',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Collaborations = () => {
  const certs = [
    { title: 'ISO 27001', certificate: Collab4 },
    { title: 'ISO 9001', certificate: Collab2 },
    { title: 'ISO 20000-1', certificate: Collab3 },
    { title: 'ISO 29993', certificate: Collab1 },
  ];

  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        data-aos="fade-up"
        data-aos-delay="100"
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '28px', sm: '36px', md: '44px', lg: '53px' },
          color: '#003F7D',
          textAlign: 'center',
          mb: { xs: 2, md: 4 }, // Responsive margin bottom
        }}>
        Our <span style={{ color: '#F98149' }}>Collaborations</span>
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        {certs.map((cert) => (
          <Grid
            item
            key={cert.title}
            sx={{ display: 'flex', flexWrap: 'wrap' }}
            data-aos="fade-up"
            data-aos-delay="200">
            <Box
              component="img"
              src={cert.certificate}
              sx={{
                padding: 5,
                width: 'auto',
                height: 73,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
const MentorsSection = () => {
  const mentors = [
    {
      name: 'Sandeep',
      specialization: '.Net & Azure',
      rating: 4.5,
      reviews: 72,
      modules: 39,
      students: 375,
      description:
        'Sandeep is a Software Developer who is expertized in .NET & Azure for more than 24 years...',
      bestTrainer: true,
      profile: Trainer1,
    },
    {
      name: 'Sudhansu',
      specialization: 'Cloud & Cyber Security, Forensic',
      rating: 4.0,
      reviews: 38,
      modules: 27,
      students: 169,
      description:
        'Sudhansu is a Software Developer expertized in Cloud Security, Data Center & Forensics for over 22 years...',
      profile: Trainer2,
    },
    {
      name: 'Ruchika Tuteja',
      specialization: 'UIUX Trainer',
      rating: 3.0,
      reviews: 58,
      modules: 27,
      students: 169,
      description:
        'I have 9 years of experience in Fullstack development. Have worked on multiple projects on.  I can provide realtime simulation of these various development languages and framework by means of multiple projects. Can provide guidance...',
      profile: Trainer3,
    },
    {
      name: 'Priya Tuteja',
      specialization: 'React JS Trainer',
      rating: 3.0,
      reviews: 58,
      modules: 27,
      students: 169,
      description:
        'I have 5 years of experience in Fullstack development. Have worked on multiple projects on.  I can provide realtime simulation of these various development languages and framework by means of multiple projects. Can provide guidance...',
      profile: Trainer3,
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          sx={{
            mb: 3,
            color: '#003F7D',
            fontSize: { xs: '28px', sm: '36px', md: '44px', lg: '53px' },
          }}>
          Meet Our Professional <span style={{ color: '#FF8B36' }}>Mentors & Trainers</span>
        </Typography>
        <Grid container spacing={6}>
          {mentors.map((mentor, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MentorCard mentor={mentor} />
            </Grid>
          ))}
        </Grid>

        <Certifications />
        <Collaborations />
      </Container>
    </Box>
  );
};

export default MentorsSection;
