import React from 'react';
import { makeStyles } from '@mui/material/styles';
import Form from './Form';
import Header from './Header';
import TodoList from './TodoList';



const useStyles = makeStyles({
    root: {
        textAlign: "center",
        height: "100%"
    }
});

const ToDo = () => {
    const classes = useStyles();
  return (
    <div>
       <div className={classes.root}>
         <h1> hello </h1>
            <Header />
            <Form />
            <TodoList />
        </div>
    </div>
  )
}

export default ToDo