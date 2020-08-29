import React from 'react'

const Form = ({ todos, setTodos, todoText, setTodoText, setOption }) => {
	const textHandler = (e) => {
		const text = e.target.value
		setTodoText(text)
	}

	const addTodo = (e) => {
		setTodos([
			...todos,
			{ text: todoText, completed: false, id: Date.now().toString() },
		])

		setTodoText('')

		e.preventDefault()
	}

	const optionHandler = (e) => {
		const option = e.target.value
		setOption(option)
	}

	return (
		<form>
			<input
				type='text'
				className='todo-input'
				onChange={textHandler}
				value={todoText}
			/>
			<button className='add-button' type='submit' onClick={addTodo}>
				<i className='fas fa-plus-square'></i>
			</button>
			<div className='options'>
				<select
					name='todos'
					className='filter-todos'
					onChange={optionHandler}>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	)
}

export default Form
