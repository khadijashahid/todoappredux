
import React from 'react';
import Container from '@mui/material/Container';
// import { makeStyles } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListIcon from '@mui/icons-material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { connect, useSelector } from 'react-redux'
import * as actionTypes from '../store/actions/actionTypes';
import { deletetodo, setEdit, setTitle, setTodo } from '../store/actions';


// const useStyles = makeStyles({
//     container: {
//         padding: 16
//     }
// });

const theme = createTheme({
    container: {
        padding: 16,
    }
})

function TodoList({ todoList, deletetodo, setEdit, setTitle, setTodo }) {
    // const classes = useStyles();
    let myTodoList = useSelector(state => state.todoReducer)
    console.log("newtodo newwwww", myTodoList)

    const handleEdit = (item) => {
        console.log("item===>>>>>>>>>>", item)
        setTitle(item.value);
        setEdit();
        setTodo(item);
    }

    const handleDelete = (item) => {
        setTodo(item);
        deletetodo();
    }
    console.log("newtodo todolist", todoList)
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <List>
                    {
                        myTodoList
                        &&
                        myTodoList.map((item) => {
                            console.log("newtodo map", item)
                            return (
                                <ListItem key={item.id} button>
                                    <ListIcon>
                                        <CheckCircleIcon color="primary" />
                                    </ListIcon>

                                    <ListItemText primary={item.value} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })}
                </List>

            </Container>
        </ThemeProvider>

    )

}
const mapStateToProps = (state) => {
    return {
        todoList: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(setTitle(title)),
        setTodo: (item) => dispatch(setTodo(item)),
        deletetodo: (item) => dispatch(deletetodo(item)),
        setEdit: () => dispatch(setEdit()),
        
        // setTodo: (item) => dispatch(actionTypes.SET_TODO(item)),
        // deletetodo: (item) => dispatch(actionTypes.DELETE_TODO(item)),
        // setEdit: () => dispatch(actionTypes.SET_EDIT()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);