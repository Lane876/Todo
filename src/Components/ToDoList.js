import React from 'react'
import Todo from './Todo'


const ToDoList = ({ todo, markToDo, deleteTodo }) => {
    const allToDos = todo.map((todo, index) => {
        return (
            <Todo todo={todo} key={todo.id} index={index} markToDo={markToDo} deleteTodo={deleteTodo} />
        )
    })

    return (
        <div className="container">
            <div className="row">
                {allToDos}
            </div>
        </div>
    )
}

export default ToDoList