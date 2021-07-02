import React, { Component } from 'react'
import uuid from 'uuid'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state={
			items: [],
			itemsToShow: "all",
			id: uuid(),
			item: '',
			editItem: false,
		}
	}

	handleChange = event => {
		this.setState({
			item: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()

		const newItem = {
			id: this.state.id,
			title: this.state.item,
			completed: false
		}

		const updatedItems = [...this.state.items, newItem]

		if (this.state.item.length > 0) {
			this.setState({
				items: updatedItems,
				id: uuid(),
				item: '',
				editItem: false
			})
		}
	}

	handleDoneTask = (id) => {
		const filteredItems = this.state.items.map(item => {
			item.id === id && (item.completed = !item.completed)
			return item
		})

		this.setState({
			items: filteredItems,
		})
	}

	handleDelete = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id)

		this.setState({
			items: filteredItems
		})
	}

	handleEdit = id => {
		this.state.items.filter(item => item.id !== id);
	}
	render() {
		let items = []

		if (this.state.itemsToShow === "all") {
			items = this.state.items;
		}

		return (
			<div className="container">
				<header className="App-header">
					<div className="row">
						<div className="col-10 col-md-8 mx-auto mt-4">
							<TodoInput
								item={this.state.item}
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
							/>
							<TodoList
								items={items}
								filterDoneTasks={this.filterDoneTasks}
								handleDelete={this.handleDelete}
								handleEdit={this.handleEdit}
								handleDoneTask={this.handleDoneTask}
							/>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
