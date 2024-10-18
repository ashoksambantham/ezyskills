import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Container, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from '../../assets/img/Logo.png';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Link, useLocation } from 'react-router-dom';
import LoginDialog from '../Dialogs/LoginDialog';
const HeaderBlue = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoginDialogopen, setLoginDialogopen] = useState(false);
  const [loginMenuAnchor, setLoginMenuAnchor] = useState(null);
  const [isSignUpDialogopen, setSignUpDialogopen] = useState(false);
  const location = useLocation();
  const handleClose = () => {
    setSignUpDialogopen(false);
  };
  // const menuItems = ['Home', 'Course Selector', 'Courses', 'Pricing', 'FAQ ', 'Contact US'];
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Course Selector', path: '/course-selector' },
    { label: 'Courses', path: '/courses' },
    { label: 'About Us', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact US', path: '/contactus' },
  ];
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLoginMenuClick = (event) => {
    console.log('Fired');
    // setLoginMenuAnchor(event.currentTarget);
    setSignUpDialogopen(true);
  };

  const handleSignUpClick = (e) => {
    console.log('Singupe');
    setSignUpDialogopen(true);
  };
  const handleLoginMenuClose = () => {
    setLoginMenuAnchor(null);
  };

  return (
    <Box sx={{ backgroundColor: '#003F7D' }}>
      <Container>
        <AppBar
          position="static"
          sx={{
            padding: '1rem 0rem',
            backgroundColor: '#003F7D',
            boxShadow: 'none',
          }}>
          <Toolbar disableGutters={true} sx={{ padding: 0 }}>
            {/* Logo */}
            <Typography
              variant="body1"
              sx={{
                lineHeight: 0,
                flexGrow: {
                  xs: 1,
                  sm: 1,
                  md: 0,
                },
              }}>
              <img src={Logo} alt="Logo" height="60px" />
            </Typography>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                ml: 'auto',
              }}>
              {menuItems.map((item, index) => (
                <Button
                  component={Link}
                  to={item.path}
                  key={index}
                  sx={{
                    color: location.pathname === item.path ? '#fff' : '#FFFFFF', // Active link in drawer
                    margin: { md: '0', lg: '0 8px' },
                    textTransform: 'capitalize',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}>
                  {item.label}
                </Button>
              ))}

              {/* Login with Dropdown */}
              <Button
                aria-controls="login-menu"
                aria-haspopup="true"
                onClick={() => {
                  setLoginDialogopen(true);
                }}
                sx={{
                  color: '#FFFFFF',
                  margin: { md: '0', lg: '0 16px' },
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  border: '2px solid #FFFFFF',
                  borderRadius: '8px',
                  padding: { md: '4px 10px', lg: '8px 30px' },
                }}>
                Login
              </Button>
            </Box>

            {/* Sign Up Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#2E343D',
                display: { xs: 'none', md: 'block' },
                marginLeft: { lg: 2, md: 1 },
                padding: { md: '4px 10px', lg: '8px 30px' },
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '14px',
                textTransform: 'capitalize',
              }}
              component={Link}
              to={'/singup'}>
              Sign Up
            </Button>

            {/* Hamburger Menu for Small Devices */}
            <IconButton
              edge="end"
              color="#fff"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto' }} // Hidden on medium and larger screens
            >
              <MenuIcon sx={{ color: '#fff', fontSize: 48 }} />
            </IconButton>

            {/* Drawer */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  width: 250,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}>
                <List>
                  {menuItems.map((item, index) => (
                    <Button
                      component={Link}
                      to={item.path}
                      key={index}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        color: location.pathname === item.path ? '#fff' : '#8A948C', // Active link in drawer
                        margin: '8px 16px',
                        textTransform: 'capitalize',
                        fontWeight: 500,
                        fontSize: '18px',
                      }}>
                      {item.label}
                    </Button>
                  ))}
                  {/* <Divider /> */}
                  {/* Login Button in Drawer */}
                  <ListItem>
                    <Button
                      aria-controls="login-menu"
                      aria-haspopup="true"
                      onClick={() => {
                        setLoginDialogopen(true);
                      }}
                      sx={{
                        color: '#F98149',
                        textTransform: 'capitalize',
                        fontSize: '14px',
                        border: '2px solid #F98149',
                        borderRadius: '8px',
                        padding: '8px 30px',
                      }}
                      endIcon={<ArrowDropDownIcon />}>
                      Login
                    </Button>
                  </ListItem>

                  <ListItem>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#F98149',
                        color: '#fff',
                        display: { md: 'block' },
                        padding: '8px 30px',
                        borderRadius: '8px',
                        fontWeight: 500,
                        fontSize: '14px',
                        textTransform: 'capitalize',
                      }}
                      component={Link}
                      to={'/singup'}>
                      Sign Up
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Container>
      {isLoginDialogopen && (
        <LoginDialog
          open={isLoginDialogopen}
          setOpen={() => {
            setLoginDialogopen(false);
          }}
        />
      )}
    </Box>
  );
};

export default HeaderBlue;
