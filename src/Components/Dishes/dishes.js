import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { setDishes, setValueDish } from '../Basket/ducks/reducers/reducers';
import { basketSelector } from '../Basket/ducks/selectors/selectors';
import cx from './dishes.module.css'


const Category = {
    salats: [{ name: 'Цезарь', cost: '100', photo: 'https://static.1000.menu/img/content-v2/79/77/1336/salat-cezar-s-syrom-pomidorami-kuricei-i-suxarikami_1617622037_14_max.jpg' },
    { name: 'Летний', cost: '500', photo: 'https://e0.edimdoma.ru/data/recipes/0006/6785/66785-ed4_wide.jpg?1468334325' },
    { name: 'Праздничный', cost: '700', photo: 'https://vkys.info/uploads/posts/2014-07/1405962157_14.jpg' }],
    drinks: [
        { name: 'Молочный', cost: '50', photo: 'https://grandkulinar.ru/uploads/posts/2018-11/1541254816_50-receptov-molochnyh-koktejlej.jpg' },
        { name: 'Мартини', cost: '150', photo: 'https://kopilka-kulinara.ru/upload/information_system_58/3/5/9/item_3595/item_3595.jpg' },
        { name: 'Клубничный', cost: '70', photo: 'https://www.chefmarket.ru/blog/wp-content/uploads/2019/08/strawberry-cocktail-e1565772112380.jpg' },
    ]
}





const DishesCategory = (props) => {

    const history = useParams();
    console.log(history)

    const dispatch = useDispatch();

    const setBasketDishes = (dish) => {
        dispatch(setDishes(dish))
    }

    return (
        <div>
            {(history.dishesName == "salats" ? Category.salats : Category.drinks) .map((el) => {
                console.log(el)
                return <div className={cx.dishContainer}>
                    <div className={cx.dishInfo}>
                        <div className={cx.dishPhoto}>
                            <img src={el.photo} />
                        </div>
                        <div className={cx.NameCost}>
                            <div className={cx.dishName}>
                                {el.name}
                            </div>
                            <div>
                                {`Цена: ${el.cost} рублей`}
                            </div>
                        </div>


                    </div>

                    <div className={cx.baskeAddContainer}>
                        <button onClick={() => { setBasketDishes(el) }} className={cx.basketAddName}>
                            Добавить в корзину
                    </button>

                    </div>


                </div>
            })}

        </div>
    )
}

export default DishesCategory;