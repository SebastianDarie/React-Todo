import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className='todo-container'>
			<ul className='todo-list'>
				{filteredTodos.map((todo) => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						text={todo.text}
						todos={todos}
						setTodos={setTodos}
						todo={todo}
					/>
				))}
			</ul>
		</div>
	)
}

export default Todos
