import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import logoin from '../component/Logoin'
import Todolist from '../component/Todolist'

const Routers = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/login' component={ logoin } />
                <Route  path='/todolist' component={ Todolist } />
            </Switch>
        </Router>
    )
   
}



export default Routers