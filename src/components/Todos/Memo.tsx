import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeMemo } from '../../slices/todo'

const TodoMemo = () => {
  const dispatch = useDispatch() 
  const { memo } = useSelector<any, any>(state => state.todos)

  const handleOnChange = (e: any) => {
    dispatch(changeMemo(e.target.value))
  }
  
  return (
    <ul>
      <h2>TODOメモ</h2>
      <input 
        value={memo}
        onChange={handleOnChange}
      />
    </ul>
  )
}

export default TodoMemo