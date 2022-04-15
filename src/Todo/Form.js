import React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
// import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions/actionTypes';
import { addtodo, setEdit, setError, setTitle } from '../store/actions';


const theme = createTheme({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"

    },
    button: {
        marginTop: 16
    }
})

// const useStyles = makeStyles({
//     root: {
//         marginTop: 16,
//         marginBottom: 16,
//         padding: 16,
//         boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
//     },
//     button: {
//         marginTop: 16
//     }
// });

const Form = ({ title, setTitle, addtodo, edittodo, edit, error, setError }) => {
    // const classes = useStyles();
    const handleChange = (event) => {
        const title = event.target.value;
        console.log("title=====", title)
        setTitle(title);
        if (title.length === 0) {
            setError("Please enter title");
        }
        // else{
        //     setError("");
        // }
    }

    const handleClick = (item) => {
        console.log("title=====", item, title)
        if (title.length === 0) {
            setError("Please enter title");
            return;
        }
        if (edit) {
            edittodo();
        } else {
            addtodo();
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <Grid container alignItems="center">
                    <Grid item md={12}>
                        <TextField value={title} onChange={handleChange}
                            helperText={error} id="outlined-basic" fullWidth label="Enter Title" multiline variant="outlined" />
                    </Grid>
                    <Grid item md={12}>
                        <Button variant="contained" color="primary" onClick={handleClick}>
                            {edit ? "Edit" : "Add"}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>

    )
}
const mapStateToProps = (state) => {
    return {
        title: state.title,
        edit: state.edit,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(setTitle(title)),
        setError: (item) => dispatch(setError(item)),
        addtodo: () => dispatch(addtodo()),
        setEdit: () => dispatch(setEdit()),

        // setTitle: (title) => dispatch(actionTypes.SET_TITLE(title)),
        // setError: (error) => dispatch(actionTypes.SET_ERROR(error)),
        // addtodo: () => dispatch(actionTypes.ADD_TODO()),
        // edittodo: () => dispatch(actionTypes.EDIT_TODO()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);