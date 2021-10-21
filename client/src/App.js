import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import {lightTheme, darkTheme } from './theme';  
import CssBaseline from "@mui/material/CssBaseline";
import {Button, ThemeProvider} from '@mui/material';  

function App() { 
  const [theme, settheme] = React.useState(lightTheme)
  const switchTheme = () => {
    if(theme == lightTheme) 
      settheme(darkTheme)
    else
      settheme(lightTheme)
  } 

  return ( 
    <ThemeProvider theme={theme}> 
    <CssBaseline/> 
    <div className="App">
      <header>
          <Button onClick={switchTheme} >Theme Switch</Button>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
