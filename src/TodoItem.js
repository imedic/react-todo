import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    handleClick() {
        this.props.removeTodo(this.props.item);
    }

    toggleCompleted() {
        this.props.toggleCompleted(this.props.item);
    }

    render() {
        return (
            <li className="todo-item">
                <label className={'todo ' + (this.props.item.completed ? 'todo--completed' : '')}>
                    <input type="checkbox" value={this.props.item.completed} onChange={this.toggleCompleted}/>
                    {this.props.item.text}
                </label>
                <button onClick={this.handleClick}>x</button>
            </li>
        );
    }
}

export default TodoItem;