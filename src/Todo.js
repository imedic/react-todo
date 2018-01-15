import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        }
    }

    addTodo(todoItem) {
        this.setState(prevState => ({
            todoItems: [...prevState.todoItems, todoItem]
        }));
    }

    removeTodo(todoItem) {
        let newTodoItems = this.state.todoItems.filter((item) => {
            if(item !== todoItem) {
                return item;
            }
        })
        
        this.setState({
            todoItems: newTodoItems
        })
    }

    editTodo(todoItem, todoItemEdited) {
        this.setState({
            todoItems: this.state.todoItems.map(todo => todo === todoItem ?
                { ...todo, text: todoItemEdited } : 
                todo
            )
        })
    }

    toggleCompleted(todoItem) {
        this.setState({
            todoItems: this.state.todoItems.map(todo => todo === todoItem ?
                { ...todo, completed: !todo.completed } : 
                todo
            )
        })
    }

    render() {
        return (
            <div className="todo-app">
                <TodoForm addTodo={this.addTodo.bind(this)}></TodoForm>
                <div className="todoList">
                    <TodoList todos={this.state.todoItems}
                              removeTodo={this.removeTodo.bind(this)}
                              editTodo={this.editTodo.bind(this)}
                              toggleCompleted={this.toggleCompleted.bind(this)}></TodoList>
                </div>
            </div>
        );
    }
}

export default Todo;