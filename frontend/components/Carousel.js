import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Link, Grid, InputAdornment, IconButton } from '@mui/material';
import Carousel from 'react-material-ui-carousel';




const Carousels = () => {

    const items = [
        {
          img: '/images/login-illustration1.png',
          alt: 'Login illustration 1',
          text: 'He who has health, has hope; and he who has hope, has everything'
        },
        {
          img: '/images/login-illustration2.png',
          alt: 'Login illustration 2',
          text: 'It is health that is real wealth and not pieces of gold and silver.'
        },
        {
          img: '/images/login-illustration3.png',
          alt: 'Login illustration 3',
          text: 'A good laugh and a long sleep are the best cures in the doctor book'
        },
        {
          img: '/images/login-illustration4.png',
          alt: 'Login illustration 3',
          text: 'A fit body, a calm mind, a house full of love'
        },
        {
          img: '/images/login-illustration5.png',
          alt: 'Login illustration 3',
          text: 'Time and health are two precious assets that we dont recognize and appreciate until they have been depleted'
        }
      ];
      
    return (
        <Carousel autoPlay={true} interval={3000} indicators={false}>
                {items.map((item, i) => (
                  <Box key={i} sx={{ position: 'relative', textAlign: 'center' }}>
                    <img src={item.img} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
                    <Box sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      color: 'white',
                      p: 2
                    }}>
                    </Box>
                      <Typography variant="h6">{item.text}</Typography>
                  </Box>
                ))}
              </Carousel>
    );
}

export default Carousels;