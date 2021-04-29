import React from 'react';

import { NavLink, Route, useHistory } from 'react-router-dom';
import { Basket } from './Basket';
import { Catigories } from './Categories';
import DishesCategory from './Dishes/dishes';
import { Header } from './Header/header';

export const MainComponent = (props) => {
    return (<>


        <Header />
        <Route path='/' exact component={Catigories} />
        <Route exact path='/category/:dishesName' component={DishesCategory}/> 
        <Route path='/basket' component={Basket}/> 
        
        

    </>




    )
}


