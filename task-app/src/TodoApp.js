import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import Grid from '@material-ui/core/Grid'


function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")

    // const initialTodos = [
    //      { id: 1, task: "finish my course", completed: false },
    //     { id: 2, task: "watch movie", completed: true },
    //     { id: 3, task: "finish cooking", completed: false }

    // ]
    const [todos, setTodos] = useState(initialTodos)
    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = newTodo => {
        setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }])

    }
    const removeTodo = todoId => {
        const updatedTodo = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodo)

    }
    const toggleTodo = todoId => {
        const updatedTodo = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
        setTodos(updatedTodo)
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodo = todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo)
        setTodos(updatedTodo)
    }

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }} elevation={0} >
            <AppBar color="primary" position="static" height={{ height: "64px" }}>
                <ToolBar>
                    <Typography color="inherit">Todos with hooks</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: 20 }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />

                </Grid>


            </Grid>




        </Paper>


    )
}
export default TodoApp