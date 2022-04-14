// reducer is a function that accepts state and action as a parameters and returns a new state.

import * as actionTypes from "../actions/actionTypes"


const initialState = {
    todos: [],
    title: "",
    todo: "",
    edit: false,

}

// reducer function 

const todoReducer = (state = initialState , action ) => {
switch (action.type) {
case actionTypes.ADD_TODO:
    const newtodo = {
        id: Date.now(),
        value: state.title,
    }
    return{
        ...state,
        todos: state.todos.concat(newtodo),
        title: "",

    }
    case actionTypes.EDIT_TODO:
            var newList = [...state.todos];
            var index = newList.indexOf(state.todo);
            if (index !== -1) {
                newList[index].value = state.title;
                return {
                    ...state,
                    title: "",
                    edit: false,
                    todos: newList,
                  
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.DELETE_TODO:
            newList = [...state.todos];
            index = newList.indexOf(state.todo);
            if (index !== -1) {
                newList.splice(index, 1);
                return {
                    ...state,
                    todos: newList
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.SET_TITLE:
            return {
                ...state,
                title: action.title
            }
            
        case actionTypes.SET_TODO:
            return {
                ...state,
                todo: action.todo,
               
            }
            case actionTypes.SET_ERROR:
                return {
                    ...state,
                    error: action.error
                }
    
        case actionTypes.SET_EDIT:
            return {
                ...state,
                edit: true,
                
            }

    default: return state
}
}
export default todoReducer