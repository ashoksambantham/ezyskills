import React, { useState } from 'react';
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
import HeaderOrange from '../../Components/Header/headerOrange';
import Footer from '../../Components/Footer/footer';
const FAQ = () => {
  const faqData = [
    {
      question: 'Who is eligible for this program?',
      answer:
        'Any Degree/Btech/BE/MTech final year, Passed outs, Individuals, Employees are eligible for this program.',
    },
    {
      question: 'What is the duration of the program?',
      answer: 'The duration of the program is typically 6 months.',
    },
    {
      question: 'Do I get the assured placement?',
      answer: 'Yes, we provide assured placement for all eligible candidates.',
    },
    {
      question: 'What is the basic academic percentage required to enroll for the course?',
      answer: 'You need a minimum of 50% in your academic records to enroll.',
    },
    {
      question: 'What is the execution plan of the program?',
      answer: 'The execution plan includes lectures, hands-on projects, and assessments.',
    },
    {
      question: 'Can we take this course online?',
      answer: 'Yes, the course can be taken online through our learning portal.',
    },
    {
      question: 'I am already employed, will I be eligible for the program?',
      answer: 'Yes, employed individuals are eligible to apply.',
    },
    {
      question: 'What if I miss the session due to an emergency?',
      answer: 'We offer recorded sessions for missed classes.',
    },
    {
      question: 'Do you provide any certificate after the program?',
      answer: 'Yes, participants will receive a certificate upon completion.',
    },
    {
      question: 'Have suggestions for us?',
      answer: 'We welcome your feedback and suggestions for program improvements.',
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <HeaderOrange />

      <Box sx={{ backgroundColor: '#F98149' }}>
        <Container maxWidth="lg">
          {/* FAQ Header */}
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff' }}>
              Frequently Asked Questions
            </Typography>
          </Box>
        </Container>
      </Box>
      {/* FAQ List */}
      <Box
        sx={{
          mb: 10,
          backgroundColor: '#F98149',
          py: 5,
        }}>
        <Container maxWidth="lg" sx={{}}>
          <Box
            sx={{
              padding: { md: '80px 40px', xs: '80px 0px' },
              backgroundColor: '#fff',
              borderRadius: '30px',
            }}>
            {faqData.map((faq, index) => (
              <Accordion
                sx={{ padding: '10px 0' }}
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#F98149' }} />}
                  aria-controls={`panel${index}d-content`}
                  id={`panel${index}d-header`}>
                  <Typography
                    sx={{ color: expanded === `panel${index}` ? '#F98149' : '#000000' }}
                    fontWeight="bold"
                    fontSize="24">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ my: 8 }} />
      <Footer />
    </>
  );
};

export default FAQ;
