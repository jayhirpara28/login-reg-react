import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <>


      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
          <Typography sx={{

backgroundImage: `url(${logo})`,
backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',
backgroundPosition: 'center',
height:'10vh',
width:'15vh',

display:{xs:'none' , sm:'block'}
}}>......</Typography>
            <Typography variant="h4" component="div" sx={{ flexgrow: 1 }}>Rebel Lion</Typography>

            <div className="button-header" style={{marginLeft: 'auto'}}>

            <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact Us</Button>

          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>

          </div>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
