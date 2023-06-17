import {Component} from 'react'
import {v4} from "uuid"
import TodoItem from '../TodoItem'

import './index.css'

class Todo extends Component {
  state = {
    todosList: [],task:''
  }

  onTaskChange=(event)=>{
    this.setState({task:event.target.value})
  }

  deleteTodo = id => {
    alert("Are you sure, you want to delete this todo?")
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({
      todosList: updatedTodosList,
    })
  }

  doneClicked= id =>{
    this.setState((prevState)=>({
        todosList:prevState.todosList.map(eachTodo=>{
            if(eachTodo.id===id){
                return {...eachTodo,done:!eachTodo.done}
            }
            return eachTodo
        })
    }))
  }

  onAddTodo=()=>{
    const {task}=this.state;
    const reqid=v4();
    const newTodo={id:reqid,title:task,done:false}
    this.setState((prevState)=>({
        todosList:[...prevState.todosList,newTodo],task:''
  }))
}

  render() {
    const {todosList,task} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className='input-btn-conatiner'>
          <input value={task} className='task-input' onChange={this.onTaskChange} placeholder='Enter your Todo' />
          <button className='add-todo-btn' onClick={this.onAddTodo} type="button">Add Task</button>
          </div>
          <h1 className='todos-list-heading'>Todos are:</h1>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                doneClicked={this.doneClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Todo
