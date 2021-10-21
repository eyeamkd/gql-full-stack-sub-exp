import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import {lightTheme, darkTheme } from './theme';  
import CssBaseline from "@mui/material/CssBaseline";
import {Button, ThemeProvider, Box} from '@mui/material';  
import Post from './components/Post';

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
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
          <Button onClick={switchTheme} >Theme Switch</Button> 
          <Post/>
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default App;
