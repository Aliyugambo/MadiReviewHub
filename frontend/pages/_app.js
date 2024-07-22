import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { useMediaQuery } from '@mui/material';

// Create a context for managing color mode
export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const MyApp = ({ Component, pageProps }) => {
  // Determine the user's system color scheme preference
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // Initialize the theme mode state based on system preference
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  // Memoize the context value to toggle the color mode
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  // Memoize the theme object to update when the mode changes
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default MyApp;
