import { createStore, combineReducers } from 'redux';
import todoSlice from './todo'

const store = createStore(
  combineReducers({
    todos: todoSlice.reducer
  })
)

export default store
