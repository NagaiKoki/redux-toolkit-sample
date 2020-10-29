import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  todoItems: [],
  memo: ''
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const items = state.todoItems

      return {
        ...state,
        todoItems: items.concat(action.payload),
        lastUpdated: new Date
      }
    },
    changeMemo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        memo: action.payload
      }
    }
  }
})

export default todoSlice

export const {
  addTodo,
  changeMemo
} = todoSlice.actions