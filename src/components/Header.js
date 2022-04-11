
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles({
    toolbar: {
        textAlign: "center",
        height: 80
    },
    heading: {
        margin: "auto"
    }
});
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.heading} variant="h5" align="center">Todo App</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;