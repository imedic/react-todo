import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
            hasError: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        if(this.state.todoText == '') {
            this.setState({hasError: true})
        }
        else {
            this.props.addTodo({
                text: this.state.todoText,
                completed: false
            });
    
            this.setState({todoText: '', hasError: false});
        }

    }

    handleChange(e) {
        this.setState({todoText : e.target.value})
    }

    render() {
        return (
            <div>
                <div className="todo-form">
                    <div>
                        <input type="text" placeholder="Enter todo text" value={this.state.todoText} onChange={this.handleChange} />
                        { this.state.hasError ? <div className="error">Todo text can't be empty</div> : <span></span>}
                    </div>
                    <button onClick={this.handleClick}>Add Todo</button>
                </div>
            </div>
        );
    }
}

export default TodoForm;