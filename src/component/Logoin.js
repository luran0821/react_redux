import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../action/actionCreators' 

const Login = (props) => {
        const {name, password, loginNameChanege, loginPwdChanege, onClickLogin, isAuth} = props
        return(
            <div>
                 <div>
                    <input value= { name }
                           onChange={ loginNameChanege }
                    />
                 </div>
                 <div>
                    <input value= { password }
                           onChange= { loginPwdChanege }
                    />
                 </div>
                 <div>
                    <button name='login'
                            onClick= { onClickLogin }
                    > login </button>
                    <button name='register' > register </button>
                 </div>
                 <div><button 

                            >login</button></div>
                 <div><button
                            
                            >logout</button></div>
            </div>
        )

}

const mapStateToProps = (state) => ({
    name: state.login.name,
    password: state.login.password,
    isAuth: state.login.isAuth  
})


const mapDispatchToProps = (dispatch) =>({
    loginNameChanege(e){
        dispatch(actionCreators.loginNameChanege(e))
    },
    loginPwdChanege(e){
        dispatch(actionCreators.loginPwdChanege(e))
    },
    onClickLogin(){
        dispatch(actionCreators.onClickLogin())
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)