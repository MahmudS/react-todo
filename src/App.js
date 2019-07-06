import React from "react"
import TodoItem from "./TodoItem"
import AddField from "./AddField"
import todosData from "./todosData"
//import firebaseConfig from "./Firebase"
//import Firebase from 'firebase';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData,
            //todos: [],
            inputValue: ''
        }
        this.changeItem = this.changeItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(event) {
      this.setState({inputValue: event.target.value});
    }
    
    changeItem(id) {
      this.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if (todo.id === id) {
                  todo.completed = !todo.completed
              }
              return todo
          })
          return {
              todos: updatedTodos
          }
      })
    }

    deleteItem(id) {
      this.setState(prevState => {
          const updatedTodos = prevState.todos.filter(todo => {
              return (todo.id !== id)
          });
          return {
              todos: updatedTodos
          }
      })
    }

    addItem(value) {
      
      this.setState(prevState => {
        let max = prevState.todos.reduce(function(max, todo) {
          return (max > todo.id) ? max : todo.id;
        }, 0);
         
        const updatedTodos = prevState.todos;
        if (prevState.inputValue !== '') {
          if (!updatedTodos.some(function(todo){
              return todo.text === prevState.inputValue;
          })) {
            updatedTodos.push({
              id: max + 1,
              text: prevState.inputValue,
              completed: false
            });
          } else {
            console.log('text "' + prevState.inputValue + '" already exist!');
          }
        } else {
          console.log('field is empty!');
        }

        return {
            todos: updatedTodos
        }
     })
    }
    
    render() {
        const todoItems = this.state.todos.map(
          item => <TodoItem 
            key={item.id} 
            item={item} 
            changeItem={this.changeItem}
            deleteItem={this.deleteItem}
          />
        )

        const addItem = <AddField 
          inputValue={this.inputValue} 
          addItem={this.addItem}
          updateValue={this.updateValue}
        />

        
        return (
            <div className="todo-list">
                {addItem}
                {todoItems}
            </div>
        )    
    }
}

export default App