import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import { NavLink , useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  //******************************************  For Data Storage In Array *************************************************\\

  const navigate = useNavigate();
  const saveData = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('pass'),
      password_confirmation: data.get('password_confirmation'),
      // tc: data.get('tc'),
    }
    if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation !== null) {
      if (actualData.password === actualData.password_confirmation) {
        let name, email, pass;

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    
//******************************************  Array For Data Storage In Localhost *************************************************\\
   

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) || []

    if (user_records.some((v) => { return v.email ===
       email })) {
        toast.error(email + "🦄 Is Already Register !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
    });

    } else {
        user_records.push({
            "name": name,
            "email": email,
            "pass": pass,
          
        })

        localStorage.setItem("users", JSON.stringify(user_records))
        toast.success(email + "🦄 Thanks For Registartion Try To Login Now !!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
    });
        
    }

        // document.getElementById('registration-form').reset()
        // setError({ status: true, msg: "Registration Successful", type: 'success' })

        
      } else {
        toast.error("🦄 Password and Confirm Password Doesn't Match", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
    });
        
      }
    } else {
      toast.error("🦄 All Fields Are Required...!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
  });
    }
  }

  //****************************************** Registration Fields ************************************************\\
  
  
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={saveData}>
    <div className="form-group">
      <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
      </div>

      <div className="form-group">
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      </div>

      <div className="form-group">
      <TextField margin='normal' required fullWidth id='pass' name='pass' label='Password' type='password' />
      </div>
      
      <div className="form-group">
      <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
      </div>

      {/* <FormControlLabel  control={<Checkbox  value="agree" color="primary" name="tc" id="tc"/>} /> */}
      <small style={{padding:20}}>By clicking Sign Up, you agree to our <NavLink to='/' > term  </NavLink> Policy.</small>
      
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>

    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
  </>;
};


export default Registration;
