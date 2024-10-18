import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LoginDialog = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agree: false,
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleClose = () => {
    setOpen();
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form Data: ', formData);
  };

  return (
    <Dialog open={open} onClose={handleClose} sx={{ padding: 2 }}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ backgroundColor: '#003F7D' }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 2, color: '#fff' }}>
            <CloseIcon />
          </IconButton>
          <DialogTitle sx={{ padding: 3, color: '#fff' }}>
            <Typography
              variant="span"
              sx={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 22,
              }}>
              Welcome {''}
              <Typography
                variant="span"
                sx={{
                  fontWeight: 'bold',
                  color: '#F98149',
                  fontSize: 22,
                }}>
                Back
              </Typography>
            </Typography>
            <Typography variant="body1" sx={{ color: '#B1B1B1' }}>
              {' '}
              Please enter your details to login in
            </Typography>
          </DialogTitle>
        </Box>

        <DialogContent sx={{ pt: 3, backgroundColor: '#FDFDFD' }}>
          <TextField
            fullWidth
            label="Enter Your email Address"
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
            label="Enter Your Password"
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

          <Button
            variant="contained"
            sx={{
              display: 'block',
              margin: '0 auto',
              textTransform: 'capitalize',
              backgroundColor: '#003F7D',
              color: '#fff',
              my: 1.5,
              '&:hover': { backgroundColor: '#083b6e' },
            }}>
            Login In
          </Button>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default LoginDialog;
