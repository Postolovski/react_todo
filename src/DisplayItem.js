import React, { Component } from 'react';
import './DisplayItem.css';


class DisplayItem extends Component {

 	constructor(){
 		super()
 		this.state = { editing: false,  }

 	}

 	componentDidMount(){
 		this.setState({ changedText: this.props.todo.title})
 	}

 	handleEditing(){
 		this.setState({ editing: true, changedText: this.props.todo.title})
 	}

 	handleEditingDone(){
 		this.setState({editing: false})
 	}

 	handleEditingChange(event){
 		var changedText = event.target.value;
 		this.setState({changedText: changedText})
 	}

	render(){
		var todo = this.props.todo;
		// var title = todo.title;
		var viewStyle = {};
		var editStyle = {};

		if(this.state.editing){
			viewStyle.display = "none";
		} else {
			editStyle.display = "none";
		}
		return  <li className={ todo.done ? "done" : "" }>
					<div style={viewStyle}>
						<input 
							checked={todo.done}
							type="checkbox" 
							onChange={this.props.handleDone.bind(null, todo.id)} 
						/>
						{this.state.changedText} 
						<button onClick={this.handleEditing.bind(this)} id="btn">Edit</button>
						<button onClick={this.props.handleDelete.bind(null, todo.id)}>Delete</button>
					</div>
					<div style={editStyle}>
						<input
							value={this.state.changedText}
							onChange={this.handleEditingChange.bind(this)}
						/>
						<button onClick={this.handleEditingDone.bind(this)}>Done</button>
					</div>
				</li>
	}
}

export default DisplayItem;