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
  render() {
    return (
      <div className="container">
        <h1>Todos</h1>
        <Todo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
