import { CssBaseline } from '@mui/material';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
    </>
  );
};

export default Layout;
