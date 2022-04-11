import * as actionTypes from  "./todoitems"

// define the action creator which defines the type.
 export const addtodo = () => {
    return {
        // action type here is a constant.
        type: actionTypes.ADD_TODO
    }
}
export const edittodo = (todo) => {
    return{ 
        type: actionTypes.EDIT_TODO, 
        todo:todo
    }
}

export const deletetodo = (todo) => {
    return{ 
        type: actionTypes.DELETE_TODO, 
        todo:todo
    }
}


export const setTitle = (title) => {
    return{ 
        type: actionTypes.SET_TITLE, 
        title: title 
    }
}
export const setError = (error) => {
    return{ 
        type: actionTypes.SET_ERROR, 
        error: error 
    }
}

export const setTodo = (todo) => {
    return{ 
        type: actionTypes.SET_TODO, 
        todo:todo
    }
}

export const setEdit = () => {
    return{ 
        type: actionTypes.SET_EDIT
    }
}
