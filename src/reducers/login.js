import * as types from '../action/types'
import axios from 'axios'

const initState = {
    name: '',
    password: '',
    isAuth: false
}

export default(state = initState, action) => {
    if(action.type === types.Login_NAME){

        axios.get('/data')
                  .then(res => {
                      console.log(res)
                  })

        const newState = JSON.parse(JSON.stringify(state))
        newState.name = action.value
        return newState
    } 
    if(action.type === types.Login_PWD){
        console.log(state)
        const newState = JSON.parse(JSON.stringify(state))
        newState.password = action.value
        return newState
    }
    if(action.type === types.Login){
        const newState = JSON.parse(JSON.stringify(state))
        console.log(newState.name, newState.password)
        return newState
    }
    return state
}