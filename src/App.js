import React, { Component } from 'react';
import './App.css';
import List from './List';

var random = require('random-key');

class App extends Component {

  constructor(){
    super();
    this.state = {title: '', todos: [
                                      {title: "First",done: false, id: 1},
                                      {title: "Second",done: false, id: 2},
                                      {title: "Third",done: false, id: 3}
                                    ]
                  }
  }

  handleDone(markDone){
    var newTodos = this.state.todos;
    var todo = newTodos.filter((todo) => {
      return todo.id === markDone
    })[0];

    todo.done = !todo.done;

    this.setState({ todos: newTodos})
  }
 
   handleSubmit(event){
    event.preventDefault();
    var title = this.state.title
    var newtodos = this.state.todos.concat({title: title, done: false, id: random.generate()})
    this.setState({title:'', todos: newtodos})
  }

  handleChange(event){
    var title = event.target.value
    // console.log(title)
    this.setState({title: title});
  }

  handleDelete(toBeDeleted){
    var newtodos = this.state.todos.filter((todo) => {
      return todo.id !== toBeDeleted
    })
    this.setState({todos: newtodos})
  };

 
 
  render() {
    return (
      <div className="App">
        <h4>Todo App</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)} value={this.state.title}/>
          <button>Add Todo</button>
        </form>
        <p>Tasks: {this.state.todos.length}  |  Done: {this.state.todos.filter((todo) => { return todo.done}).length } 
            
        </p>

        <List 
          todos={this.state.todos}
          handleDelete={this.handleDelete.bind(this)}
          handleDone={this.handleDone.bind(this)}
        />
      </div>
    );
  }
}

export default App;
