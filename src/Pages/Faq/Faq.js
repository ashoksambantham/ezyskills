import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <Container maxWidth="lg">
      {/* FAQ Header */}
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ff6f00' }}>
          Frequently Asked Questions
        </Typography>
      </Box>

      {/* FAQ List */}
      <Box sx={{ mb: 10 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: '#ff6f00', color: 'white' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Who is eligible for this program?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Any Degree/BTech/BE/MTech final year, Passed outs, Individuals, Employees are eligible
              for this program.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is the duration of the program?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The duration depends on the course chosen, typically ranging from 3 to 6 months.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Do I get the assured placement?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, assured placements are offered depending on your performance and completion of
              the program.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Add more FAQs as needed */}
      </Box>

      {/* Footer Section */}
      <Box sx={{ backgroundColor: '#004165', color: 'white', py: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Let us build your career together. Be the first person to transform yourself with our
              unique & world-class corporate level training.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">Home</Typography>
              <Typography variant="body2">Our Story</Typography>
              <Typography variant="body2">Best Courses</Typography>
              <Typography variant="body2">FAQs</Typography>
              <Typography variant="body2">Cancellation & Refunds</Typography>
              <Typography variant="body2">Contact Us</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Navakeethan Complex
            </Typography>
            <Typography variant="body2">6th Floor, 605, 606 A&P opp.</Typography>
            <Typography variant="body2">Secunderabad, Telangana 500003</Typography>
            <Typography variant="body2">info@ezyskills.in</Typography>
            <Typography variant="body2">+91 8428484903</Typography>
            <Typography variant="body2">+91 9475848959</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Subscribe Section */}
      <Box sx={{ backgroundColor: '#ff6f00', py: 4, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
          Subscribe to Our Newsletter
        </Typography>
        <Box display="flex" justifyContent="center">
          <TextField
            placeholder="Your Email Address"
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
          />
          <Button variant="contained" sx={{ backgroundColor: '#004165', ml: 2 }}>
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FAQ;
