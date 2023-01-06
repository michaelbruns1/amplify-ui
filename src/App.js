import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import SiteNavigation from './components/SiteNavigation';

const theme = {
  colors: {
    primary: 'hsl(80, 30%, 40%)',
    secondary: 'hsl(120, 80%, 30%)',
    tertiary: 'hsl(40, 30%, 40%)',
    quaternary: 'hsl(80, 80%, 60%)',
    quinary: 'hsl(100, 80% 60%)',
    clear: 'hsla(0, 0%, 0%, 0)',
      },
};

function App () {
    
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <SiteNavigation />
    </div>
    </ThemeProvider>
  );
}

export default App;
