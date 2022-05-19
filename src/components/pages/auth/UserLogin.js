import { TextField, Button, Box } from "@mui/material";
import React from "react";
import {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const UserLogin = () => {
  const [] = useState({
    status: false,
    msg: "",
    type: ""
  })  
  const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const actualData = {
    email : data.get('email'),
    pass : data.get('pass')
  }
  if(actualData.email && actualData.pass)
  {
    let email, pass;

email = document.getElementById("email").value;
pass = document.getElementById("pass").value;


// Array For Data Storage

let user_records = new Array();
user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

if (user_records.some((v) => { return v.email === email && v.pass === pass })) {
  toast.success(email + "🦄 \n Welcome To The Journy", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
    

    let current_user = user_records.filter((v) => { return v.email === email && v.pass === pass })[0]

    localStorage.setItem('name', current_user.name);
    localStorage.setItem('email', current_user.email);

    navigate('/dashboard')

} else {
  toast.success('🦄 Password For ' + email + ' Is Wrong , Please Try Again', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
    
}
}
  document.getElementById('login-form').reset()


   //******************************************  For Data Storage In Array *************************************************\\
}
 

// Login Field

  return (
    <>
      <Box component="form" noValiate sx={{ mt: 2 }} id="login-form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          
          fullWidth
          id="email"
          name="email"
          label="Email Address *"
        />
        <TextField
          margin="normal"
         
          fullWidth
          id="pass"
          name="pass"
          label="Password *"
          type="password"
        />

        <Box textAlign='center'>
          <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Login In</Button>
        </Box>
        <small><NavLink to='/ResetEmail'>Forgot Password ?</NavLink></small>
        {/* {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''} */}
      </Box>
      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </>
  );
};

export default UserLogin;
