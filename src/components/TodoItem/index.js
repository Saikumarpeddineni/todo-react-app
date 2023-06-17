import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo,doneClicked} = props
  const {id, title,done} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onDoneClick=()=>{
    doneClicked(id)
  }
  const isDoneClassName = done?"done":""
  const doneText = done?"Redo":"Done"

  return (
    <li className="todo-item">
      <p className={`title ${isDoneClassName}`}>{title}</p>
      <div className='btn-container'>
      <button onClick={onDoneClick} type="button" className="done-btn">
        {doneText}
      </button>
      <button onClick={onDeleteTodo} className='delete-btn' type='button'>
        <img className='delete-img' src="https://thumbs.dreamstime.com/z/delete-icon-filled-line-style-any-projects-use-website-mobile-app-presentation-202535650.jpg" alt="delete"/>
      </button>
      </div>
    </li>
  )
}

export default TodoItem
