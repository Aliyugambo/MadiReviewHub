import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch,Link } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../pages/_app';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

const Header = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Link href="/" variant="body2" sx={{ textDecoration: 'none' }}><img src='/images/logo.png' alt='logo' style={logoStyle} /></Link>
        </Typography>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Switch
          checked={theme.palette.mode === 'dark'}
          onChange={colorMode.toggleColorMode}
          color="default"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
