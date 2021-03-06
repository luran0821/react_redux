import { combineReducers } from 'redux'


import todolist from './todolist'
import login from  './login'
import sign from  './sign'
/** 
 * combineReducers 辅助函数的作用是，
 * 把一个由多个不同 reducer 函数作为 value 的 object，
 * 合并成一个最终的 reducer 函数，
 * 然后就可以对这个 reducer 调用 createStore 方法
*/



export default combineReducers({

    todolist,login,sign
});