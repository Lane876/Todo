import React, { Component } from 'react'




class NewToDo extends Component {
    state = {
        msg: "",
        done: false
    }


    setNewMsg = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    addTodo = () => {
        this.props.addintotodos(this.state)
        this.setState({
            msg: ''
        })
    }

    render() {
        return (
            <div className="conatiner">
                <div className="row m-5">
                    <div className="col-4 offset-4">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Add Thing To Do!" onChange={this.setNewMsg} value={this.state.msg} />
                            <div className="input-group-appned">
                                <button className="btn btn-primary" onClick={this.addTodo}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewToDo