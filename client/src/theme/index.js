//for conatiners use "makeStyles" hook from material 

// for Components use StyledComponents 

// HOCs are still not decided where to be used 

import { createTheme, ThemeProvider } from '@mui/material';
import {blue, purple} from '@mui/material/colors';
import './global-theme.css'; 

const lightTheme  = createTheme({ 
    palette:{ 
        primary: { 
            main:blue[500]
        }, 
        secondary:{
            main:blue[300]
        },
        background:{
            default:blue[300]
        }
    }
}); 

const darkTheme = createTheme({ 
    palette:{
        primary:{
            main:purple[500]
        },
        secondary:{
            main:purple[300]
        },
        background:{
            default:purple[300]
        }
    }
}); 


export {lightTheme, darkTheme}