import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button, TextField, Container, Typography, Box, Link, Grid, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import Notification from '../components/Notification';
import Layout from '../components/Layout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setSuccess('Login successful. Redirecting to profile...');
      setTimeout(() => {
        router.push('/profile');
      }, 2000);
    } catch (error) {
      console.error(error);
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const items = [
    {
      img: '/images/login-illustration1.png',
      alt: 'Login illustration 1',
      text: 'AI POWERED RETAIL ENGINE FOR Point of Sale & Terminals'
    },
    {
      img: '/images/login-illustration2.png',
      alt: 'Login illustration 2',
      text: 'Enhance Customer Experience with Efficient Solutions'
    },
    {
      img: '/images/login-illustration3.png',
      alt: 'Login illustration 3',
      text: 'Innovative Technologies for Modern Businesses'
    },
    {
      img: '/images/login-illustration4.png',
      alt: 'Login illustration 3',
      text: 'Innovative Technologies for Modern Businesses'
    },
    {
      img: '/images/login-illustration5.png',
      alt: 'Login illustration 3',
      text: 'Innovative Technologies for Modern Businesses'
    }
  ];

  return (
    <Layout>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '70vh' 
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 4 }}>
              {error && <Notification message={error} type="error" />}
              {success && <Notification message={success} type="success" />}
                <Typography variant="h4" component="h1" gutterBottom>
                  Welcome back, Log In
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Personal Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                        Forgot Password?
                      </Link>
                    </Grid>
                  </Grid>
                  <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Login
                  </Button>
                  <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                    <Grid item>
                      <Link href="/register" variant="body2" sx={{ textDecoration: 'none' }}>
                        New User? Create an account
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                        Privacy
                      </Link>
                      {' | '}
                      <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                        Terms
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Login;
