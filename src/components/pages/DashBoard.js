import React from 'react';  
import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';
import { ToastContainer, toast } from 'react-toastify';


const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    toast.success("🦄 You Are Logged Out !!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
});
  navigate('/login')
  }
  return (
    <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Your Profile</h1>
        <Typography variant='h6'>Email: {(localStorage.getItem('email'))}  </Typography>
        <Typography variant='h6'>Name: {(localStorage.getItem('name'))} </Typography>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
      <Grid item sm={8}>
     <ChangePassword/>
        
      </Grid>
    </Grid>
    
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
    </>
    
  )
}

export default Dashboard
