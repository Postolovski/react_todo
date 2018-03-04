import React, { Component } from 'react';
import DisplayItem from './DisplayItem';

class List extends Component {

	render(){
		return(
			<ul>
				{this.props.todos.map((todo, index) => {
					return	<DisplayItem 
								key={todo.title}
								handleDelete={this.props.handleDelete.bind(null, todo.id)}
								todo={todo}
								handleDone={this.props.handleDone}
							/>
				})}
				 
			</ul>
		)
	}

}

export default List;