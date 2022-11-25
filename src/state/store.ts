import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { ActionType } from './action-types'

export const store = createStore(reducers, {}, applyMiddleware(thunk))

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: 'string',
    type: 'code'
  }
})

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    //@ts-ignore
    id: null,
    type: 'text'
  }
})

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: 'string',
    type: 'code'
  }
})

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    //@ts-ignore
    id: null,
    type: 'text'
  }
})

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: 'string',
    type: 'code'
  }
})

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    //@ts-ignore
    id: null,
    type: 'text'
  }
})

console.log(
  '🚀 ~ file: store.ts ~ line 16 ~ store.getState()',
  store.getState()
)
