
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { makeStyles } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    toolbar: {
        textAlign: "center",
        height: 80
    },
    heading: {
        margin: "auto"
    }
  })

// const useStyles = makeStyles({
//     toolbar: {
//         textAlign: "center",
//         height: 80
//     },
//     heading: {
//         margin: "auto"
//     }
// });
const Header = () => {
    // const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>

<AppBar position="static">
            <Toolbar >
                <Typography variant="h5" align="center">Todo App</Typography>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
    
       
}

export default Header;