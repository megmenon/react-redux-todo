import React, { Component } from 'react';
import './index.css';
import Todo from './components/Todo';


class App extends Component {
	state = {
		todos: [ 
		{
			id: 1, content: 'feed the cats'
		} ,

		{
			id: 2, content: 'buy groceries'
		}

		]
	}

	deleteTodo = (id) => {
		console.log(id)
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id
		})

		this.setState({
			todos
		})
	}

  render() {
    return (
      <div className="container">
        <h1>Todos</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
