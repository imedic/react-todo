import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            editTodo: this.props.item.text
        }

        this.handleClick = this.handleClick.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.onChangeEdit = this.onChangeEdit.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
    }

    handleClick() {
        this.props.removeTodo(this.props.item);
    }

    toggleCompleted() {
        this.props.toggleCompleted(this.props.item);
    }

    editTodo() {
        this.setState({editMode: true});
    }

    saveEdit() {
        console.log(this.state.editTodo);
        this.setState({editMode: false});
        this.props.editTodo(this.props.item, this.state.editTodo);
    }

    onChangeEdit(e) {
        this.setState({editTodo: e.target.value})
    }

    render() {
        return (
            this.state.editMode ? 
                <div className="todo-form">
                    <input type="text" value={this.state.editTodo} onChange={this.onChangeEdit} />
                    <button onClick={this.saveEdit}>Save</button>
                </div>:
                <li className="todo-item">
                    <label className={'todo ' + (this.props.item.completed ? 'todo--completed' : '')}>
                        <input type="checkbox" checked={this.props.item.completed} onChange={this.toggleCompleted}/>
                        {this.props.item.text}
                    </label>
                    <div>
                        <button onClick={this.editTodo}>Edit</button>
                        <button onClick={this.handleClick}>x</button>
                    </div>
                </li>
        );
    }
}

export default TodoItem;