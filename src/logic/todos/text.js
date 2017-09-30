import { SET_TEXT } from './actionTypes'

export const getText = state => state

const text = (state = '', action) => {
  return action.type === SET_TEXT ? action.payload : state
}

export default text
