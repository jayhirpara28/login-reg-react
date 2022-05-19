import { Grid, Card, Tabs, Tab, Box } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import UserLogin from './UserLogin';
import Registration from './Registration';
import img1 from '../../../images/img1.jpg';

const TabPanel = (props) => {

      const { children, value, index } = props;
      return (
            <div role='tabpanel' hidden={value !== index}>
                  {
                        value === index && (
                              <Box>{children}</Box>
                        )
                  }
            </div>
      )
}

export const LoginReg = () => {
      const [value, setValue] = useState(0);
      const handleChange = (event, newValue) => {
            setValue(newValue);
      }
      return (
            <>
                  <Grid container sx={{ height: '90vh' }}>
                        <Grid item lg={7} sm={5} xs={12} sx={{

                              backgroundImage: `url(${img1})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              display:{xs:'none' , sm:'block'}
                        }}>
                        </Grid>

                        <Grid item lg={5} sm={7} xs={12}>
                              <Card sx={{ width: '100%', height: '100%' }}>
                                    <Box>
                                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                                                      <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                                      <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                                </Tabs>

                                          </Box>
                                          <TabPanel value={value} index={0}>
                                                <UserLogin/>
                                          </TabPanel>
                                          <TabPanel value={value} index={1}><Registration/></TabPanel>
                                    </Box>

                              </Card>

                        </Grid>

                  </Grid>

            </>
      )
}

