import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Todos from './components/Todos'

import 'App.css'

const App = () => {
	const [todoText, setTodoText] = useState('')
	const [todos, setTodos] = useState([])
	const [option, setOption] = useState('all')
	const [filteredTodos, setFilteredTodos] = useState([])

	useEffect(() => {
		getLocal()
	}, [])

	useEffect(() => {
		filterHandler()
		saveToLocal()
	}, [todos, option])

	const filterHandler = () => {
		switch (option) {
			case 'completed':
				setFilteredTodos(
					todos.filter((todo) => todo.completed === true)
				)
				break

			case 'uncompleted':
				setFilteredTodos(
					todos.filter((todo) => todo.completed === false)
				)
				break

			default:
				setFilteredTodos(todos)
				break
		}
	}

	const saveToLocal = () => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}

	const getLocal = () => {
		let localTodos = JSON.parse(localStorage.getItem('todos'))

		if (localTodos === null || localTodos.length === 0) {
			localStorage.setItem('todos', JSON.stringify([]))
		} else {
			setTodos(localTodos)
		}
	}

	return (
		<Fragment>
			<Header />
			<Form
				todos={todos}
				setTodos={setTodos}
				todoText={todoText}
				setTodoText={setTodoText}
				setOption={setOption}
			/>
			<Todos
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
		</Fragment>
	)
}

export default App
