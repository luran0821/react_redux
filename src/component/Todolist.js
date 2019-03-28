import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//创建actionCreators统一管理action
import * as actionCreators  from '../action/actionCreators'

//无状态组件
const TodoList = (props) =>{
        const {list, chanegeInputValue, handleClick, inputValue, isAuth} = props

        return(
            <div>
                {/* { !isAuth ? <Redirect to='/login' /> : null } */}
                <div>
                <input value = {inputValue}
                           onChange = {chanegeInputValue}
                    />
                    {console.log(inputValue)}
                    
                    <button onClick = {handleClick}>submit</button>
                </div>
                <ul>
                    { list.map((item, index) => {
                        return <li key = { index } >{ item }</li>
                    })}
                </ul>               
            </div>
        )
    }

const mapSteteToProps = (state) => ({
        inputValue: state.todolist.inputValue,
        list: state.todolist.list,
        isAuth: state.login.isAuth  
        //immutable数据要用ger('value')获取数据
        // inputValue: state.todolist.get('inputValue'),
        // list: state.todolist.get('list')       
})
const mapDispatchToProps = (dispatch) => {
    return{
        chanegeInputValue(e){
            // const action = {
            //     type: 'change_input_value',
            //     value: e.target.value
            // }

            dispatch(actionCreators.changeInputValue(e))
            console.log(e.target.value)
            //dispatch()
        },
        handleClick(){
            // const action = {
            //     type: 'add_item'
            // }
            dispatch(actionCreators.handleClick())
        }
    }
}

export default connect(mapSteteToProps, mapDispatchToProps)(TodoList)