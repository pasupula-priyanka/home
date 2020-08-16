import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Importing components

import Main from './components/Main';
import Contact from './components/contactUs';
import Thanks from './components/thanks';

const Routes = () =>{
    return(
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route  exact path="/Contact" component={Contact}/>
        <Route  exact path="/thanks/:name" component={Thanks}/>
    </Switch>
    )
}

export default Routes;