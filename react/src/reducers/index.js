import { combineReducers } from 'redux'
import triggerDarkModeReducer from './triggerDarkMode'

const allReducers = combineReducers({
  triggerDarkMode: triggerDarkModeReducer
})

export default allReducers