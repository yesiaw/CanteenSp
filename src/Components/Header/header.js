import React from 'react';
import cx from './header.module.css';
import TemporaryDrawer from '../burger/burger-custom';
import basket from '../../img/basket.png'
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { basketSelector } from '../Basket/ducks/selectors/selectors';

export const Header = () => {

    const dishes = useSelector(basketSelector)

    return (
        <div>
            <div className={cx.header}>
                <div className={cx.burger}>
                    <TemporaryDrawer />
                </div>
                <NavLink to='/basket'>
                    <div className={cx.basket}>
                        <button className={cx.basketButton}>
                            {dishes.length}
                            <img src={basket} className={cx.basketStyle} />
                        </button>

                    </div>

                </NavLink>

            </div>

            <div className={cx.RestourantNames}>
                Restaurant Manifset
            </div>
            <div className={cx.ButtonCallWaiter}>
                <NavLink to='/'>
                    <Button variant="contained" color="primary" disableElevation>
                        Меню
                </Button>

                </NavLink>

                <Button variant="contained" color="primary" disableElevation>
                    Позвать официанта
                </Button>

            </div>
        </div>
    )
}