import React from 'react'

const TodoItem = ({ id, text, todos, setTodos, todo }) => {
	const deleteTodo = () => {
		setTodos([...todos.filter((todo) => todo.id !== id)])
	}

	const changeCompleted = (e) => {
		setTodos([
			...todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			}),
		])
	}

	return (
		<div className='todo'>
			<li
				className={
					todo.completed ? 'todo-item completed' : 'todo-item'
				}>
				{text}
			</li>
			<button className='check-btn' onClick={changeCompleted}>
				<i className='fas fa-check'></i>
			</button>
			<button className='trash-btn' onClick={deleteTodo}>
				<i className='fas fa-trash'></i>
			</button>
		</div>
	)
}

export default TodoItem
