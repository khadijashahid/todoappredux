import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/material/styles';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import { connect } from 'react-redux'
import * as actionTypes from '../redux/todo/todoActions';
const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    },
    button: {
        marginTop: 16
    }
});

const Form = ({ title, setTitle, addtodo, edittodo, edit, error, setError }) => {
    const classes = useStyles();
    const handleChange = (event) => {
        const title = event.target.value;
        
        setTitle(title);
        if(title.length === 0){
            setError("Please enter title");
        }else{
            setError("");
        }
    }

    const handleClick = () => {
        if(title.length === 0){
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
        <Container maxWidth="sm" className={classes.root}>
            <Grid container alignItems="center">
                <Grid item md={12}>
                    <TextField value={title} onChange={handleChange} 
                    error={!!error} helperText={error} id="outlined-basic" fullWidth label="Enter Title" multiline variant="outlined" />
                </Grid>
                <Grid item md={12}>
                    <Button className={classes.button} variant="contained" color="primary" onClick={handleClick}>
                        {edit ? "Edit" : "Add"}
                    </Button>
                </Grid>
            </Grid>
        </Container>
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
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setError: (error) => dispatch(actionTypes.setError(error)),
        addtodo: () => dispatch(actionTypes.addtodo()),
        edittodo: () => dispatch(actionTypes.edittodo()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);