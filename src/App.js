import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "styled-components";
import  {darkTheme,lightTheme } from './theme';
import {GlobalStyles} from './global';
import { useState } from 'react';

function App() {
  
  const [theme, setTheme] = useState('light');

// The function that toggles between themes
const toggleTheme = () => {
  // if the theme is not light, then set it to dark
  if (theme === 'light') {
    setTheme('dark');
  // otherwise, it should be light
  } else {
    setTheme('light');
  }
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle theme</button>
        <h1>It's a light theme!</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
  
  );
}

export default App;
