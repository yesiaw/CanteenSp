import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeDishes, setDishes } from './ducks/reducers/reducers';
import { basketSelector } from './ducks/selectors/selectors';
import cx from './style.module.css'

export const Basket = () => {

    const dishes = useSelector(basketSelector);
    let totalCost = 0;
    
    const dispatch = useDispatch();

    const setBasketDishes = (dish) => {
        dispatch(setDishes(dish))
    }
    const deleteDishes = (dish) => {
        dispatch(removeDishes(dish))
    }

    return (
        <div>
            <div>
                Корзина:
            </div>
            {dishes.map(el => {
                totalCost = totalCost + (Number(el.cost) * el.quantity);
                return <div className={cx.basketContainer}>
                <div className={cx.basketDishInfo}>
                    <div className={cx.basketDishName}>
                        {el.name}
                   </div>
                    <div className={cx.basketDishCost}>
                        {`Цена : ${el.cost}`}
                   </div>
                    <div className={cx.basketDishValue}>
                        <div className={cx.basketDishValueText}>
                            Количество:
                       </div>
                        <button onClick = {() => {deleteDishes(el)}}> - </button>
                        <div>{el.quantity}</div>
                        <button onClick = {() => {setBasketDishes(el)}}> + </button>
                    </div>

                </div>


            </div>
            })}
            
            <div className = {cx.AllBasketInfo}>
                    <div className = {cx.AllBasketInfoText}>
                    {`Общая стоимость: ${totalCost}`}
                    </div>
                    <button>Сделать заказ</button>

                </div>
        </div>
    )
}