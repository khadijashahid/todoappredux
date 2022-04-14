import React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
// import { makeStyles } from '@mui/styles';
import Form from './Form';
import Header from './Header';
import TodoList from './TodoList';

const theme = createTheme({
  root: {
    textAlign: "center",
    height: "100%"
}
})

// const useStyles = makeStyles({
//     root: {
//         textAlign: "center",
//         height: "100%"
//     }
// });

const ToDo = () => {

  return (
    <ThemeProvider theme={theme}>
  <div>
       <div >
       
            <Header />
            <Form />
            <TodoList />
        </div>
    </div>
    </ThemeProvider>
  
  )
}

export default ToDo