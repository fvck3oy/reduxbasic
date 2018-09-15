import React, { Component } from 'react'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { number: 0, now: '' }
	}
	// handleAdd = () => {
	// 	const { number } = this.state
	// 	this.setState({ number: number + 1 })
	// }
	// handleSub = () => {
	// 	const { number } = this.state
	// 	this.setState({ number: number - 1 })
	// }

	render() {
		const { number, add, sub, now } = this.props

		// const { handleAdd, handleSub } = this
		return (
			<div className="App">
				<button onClick={add}>ADD</button>
				{number}
				<button onClick={sub}>SUB</button>
				<br />
				{now}
			</div>
		)
	}
}

export default App
