import React, { Component } from 'react';
import '../index.css'

const Todos = ({todos}) => {
	const todosList = todos.length ? (
		todos.map(todo => {
			return ( 
				<tr key={todo.id}>
						<td>{todo.content}</td>
				</tr>
			)
		})

		) : (
		<p>No more todos!</p>

		)
	return (

		<div>
			<table className="striped">
				<tbody>
					{todosList}
				</tbody>
			</table>
		</div>

	)
}

export default Todos