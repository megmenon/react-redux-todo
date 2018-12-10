import React, { Component } from 'react';

class AddForm extends Component {
	state = {
		content: ''
	}
	handleChange = e => {
		this.setState({
			content: e.target.value
		})
	}
	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state)
		this.props.addTodo(this.state);
		this.setState({
			content: ''
		})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="row">
	    				<div className="input-field col s6">
	      					<label className="active"> Add Todo:</label>
	      					<input type="text" value={this.state.content} onChange={this.handleChange}/>
	    				</div>
	 			 	</div>
	        	</form>
			</div>
		);
	}
}

export default AddForm