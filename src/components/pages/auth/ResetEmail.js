import React from 'react'
import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ResetEmail = () => {
      const [error] = useState({
            status: false,
            msg: "",
            type: ""
      })
      const handleSubmit = (e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const actualData = {
                  email: data.get('email'),
            }
            if (actualData.email) {
                  console.log(actualData);
                  document.getElementById('password-reset-email-form').reset()
                  toast.success('🦄Email Sent Sucessfully', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                  });
            } else {
                  toast.error('🦄 Please Provide Valid Email', {
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
      return <>
            <Grid container justifyContent='center'>
                  <Grid item sm={6} xs={12}>
                        <h1>Reset Password</h1>
                        <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-email-form' onSubmit={handleSubmit}>
                              <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
                              <Box textAlign='center'>
                                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Send</Button>
                              </Box>
                              {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
                        </Box>
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
      </>;
};

export default ResetEmail;