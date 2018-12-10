import React from 'react';
import '../index.css'

const Todos = ({todos, deleteTodo}) => {
	const todosList = todos.length ? (
		todos.map(todo => {
			return ( 
				<tr key={todo.id}>
						<td onClick={() => {deleteTodo(todo.id)}}>{todo.content}</td>
				</tr>
			)
		})

		) : (
		<h5>No more todos!</h5>

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