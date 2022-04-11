
import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/material/styles';
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
import { connect } from 'react-redux'
import * as actionTypes from '../redux/todo/todoActions';

const useStyles = makeStyles({
    container: {
        padding: 16
    }
});

function TodoList({ addtodo, deletetodo, edittodo, setEdit, setTitle, setTodo }) {
    const classes = useStyles();

    const handleEdit = (item) => {
        setTitle(item.value);
        setEdit();
        setTodo(item);
    }

    const handleDelete = (item) => {
        setTodo(item);
        deletetodo();
    }
    return (
        <Container className={classes.container} maxWidth="md">
            {!addtodo.length
                ?
                <Typography variant="h6" color="error">No Data to display</Typography>
                :
                (<List>
                    {addtodo.map(item => {
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
                </List>)
            }
        </Container>
    )

}
const mapStateToProps = (state) => {
    return {
        addtodo: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setTodo: (item) => dispatch(actionTypes.setTodo(item)),
        deletetodo: (item) => dispatch(actionTypes.deletetodo(item)),
        setEdit: () => dispatch(actionTypes.setEdit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);