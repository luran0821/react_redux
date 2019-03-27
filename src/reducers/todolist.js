import * as types from '../action/types'
//import { fromJS } from 'immutable'

//immutable.js  immutable对象不可改变

//immutable数据
const initState = {
    inputValue: 'kong',
    list: []
}

export default(state = initState, action) => {

    // switch(action.type ){
    //     case 'change_input_value':
    //         const newState = JSON.parse(JSON.stringify(state))
    //         newState.inputValue = action.value
    //         return newState
    //     case 'add_item':
    //         const newState = JSON.parse(JSON.stringify(state))
    //         newState.list.push(newState.inputValue)
    //         newState.inputValue = ''
    //         return newState 
    //     default:
    //         return state      
    // }

    if(action.type === types.CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState

        //immutable 数据修改 set 会结合之前immutable的值和设置的值，返回一个全新的对象
        
        //return state.set('inputValue', action.value)
    }
    if(action.type === types.ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState

        //immutable 数据修改
        
        
        //return state.set('list', state.get('inputValue'))


    }
    return state;


}