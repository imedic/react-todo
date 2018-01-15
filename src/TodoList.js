import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    removeTodo(todo) {
        this.props.removeTodo(todo);
    }

    toggleCompleted(todo) {
        this.props.toggleCompleted(todo);
    }

    editTodo(todo, todoEdited) {
        this.props.editTodo(todo, todoEdited);
    }

    render() {
        const todoItems = this.props.todos.map((todo, index) =>
            <TodoItem item={todo}
                      removeTodo={this.removeTodo.bind(this)}
                      editTodo={this.editTodo.bind(this)}
                      toggleCompleted={this.toggleCompleted.bind(this)}
                      key={index}>
            </TodoItem>
        );

        return (
            <div>
                <ul>
                    {todoItems}
                </ul>
            </div>
        );
    }
}

export default TodoList;