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

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginMenuAnchor, setLoginMenuAnchor] = useState(null);
  const [isSignUpDialogopen, setSignUpDialogopen] = useState(false);

  const handleClose = () => {
    setSignUpDialogopen(false);
  };
  const menuItems = ['Home', 'Course Selector', 'Courses', 'Pricing', 'FAQ ', 'Contact US'];

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
    <>
      <Container>
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#fff',
            padding: '1rem 0rem',
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
                  key={index}
                  sx={{
                    color: '#8A948C',
                    margin: { md: '0', lg: '0 8px' },
                    textTransform: 'capitalize',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}>
                  {item}
                </Button>
              ))}

              {/* Login with Dropdown */}
              <Button
                aria-controls="login-menu"
                aria-haspopup="true"
                onClick={handleLoginMenuClick}
                sx={{
                  color: '#F98149',
                  margin: { md: '0', lg: '0 16px' },
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  border: '2px solid #F98149',
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
                backgroundColor: '#F98149',
                color: '#fff',
                display: { xs: 'none', md: 'block' },
                marginLeft: { lg: 2, md: 1 },
                padding: { md: '4px 10px', lg: '8px 30px' },
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '14px',
                textTransform: 'capitalize',
              }}
              onClick={handleSignUpClick}>
              Sign Up
            </Button>

            {/* Hamburger Menu for Small Devices */}
            <IconButton
              edge="end"
              color="#003F7D"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto' }} // Hidden on medium and larger screens
            >
              <MenuIcon />
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
                      key={index}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#2B2A29',
                        margin: '8px 16px',
                        textTransform: 'capitalize',
                        fontWeight: 500,
                        fontSize: '18px',
                      }}>
                      {item}
                    </Button>
                  ))}
                  {/* <Divider /> */}
                  {/* Login Button in Drawer */}
                  <ListItem>
                    <Button
                      aria-controls="login-menu"
                      aria-haspopup="true"
                      onClick={handleLoginMenuClick}
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
                      onClick={handleSignUpClick}>
                      Sign Up
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Header;
