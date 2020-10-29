import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../slices/todo'

const TodoItem = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()
  const { todoItems } = useSelector<any, any>(state => state.todos)

  const handleOnChage = (e: any) => [
    setKeyword(e.target.value)
  ]
  
  const handleAddTodo = () => {
    dispatch(addTodo(keyword))
    setKeyword('')
  }

  const renderTodoList = todoItems.map((todo: any) => {
    return (
      <li>{todo}</li>
    )
  })

  return (
    <ul>
      <h2>TODOリスト</h2>
      {renderTodoList}
      <input
        value={keyword}
        onChange={handleOnChage}
      />
      <button onClick={handleAddTodo}>追加</button>
    </ul>
  )
}

export default TodoItem