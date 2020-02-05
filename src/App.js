import React, { Component } from 'react';
import Jumbotron from './Components/Jumbotron'
import NewToDo from './Components/NewToDo'
import ToDoList from './Components/ToDoList'
import './App.css'



class App extends Component {
    state = {
        todo: []
    }

    componentDidMount() {
        let data = []
        if (localStorage.data) {
            data = JSON.parse(localStorage.data)
        }
        this.setState({
            todo: data
        })
    }



    addintotodos = (todo) => {
        todo.id = Math.floor(Math.random() * (100 - 10) - 10)
        localStorage.data = JSON.stringify([...this.state.todo, todo])
        this.setState({ todo: [...this.state.todo, todo] })
    }


    markToDo = (index) => {
        const copyTodos = [...this.state.todo]
        copyTodos[index].done = !copyTodos[index].done
        localStorage.data = JSON.stringify(copyTodos)
        this.setState({ todo: copyTodos })
    }

    deleteTodo = (index) => {
        const copyTodos = [...this.state.todo]
        copyTodos.splice(index, 1)
        localStorage.data = JSON.stringify(copyTodos)
        this.setState({
            todo: copyTodos
        })
    }


    render() {
        return (
            <div className="wrap">
                <Jumbotron />
                <NewToDo addintotodos={this.addintotodos} />
                <ToDoList todo={this.state.todo} markToDo={this.markToDo} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

export default App
