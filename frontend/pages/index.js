// pages/index.js
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Layout from '../components/Layout';


const Home = () => {



  return (

  <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <h1>Welcome to MediReview Hub</h1>
      </Layout>
    </ThemeProvider>
)};

export default Home;
