import React from 'react';

import cx from './style.module.css'
import { BrowserRouter, NavLink, Route, useHistory, useLocation, useParams, withRouter } from 'react-router-dom';


export const Catigories = (props) => {


    const CatigoriesOfDishes = [
        { categoryName: 'Первые блюда', namesOfcategory: 'hotDishes', photo: 'https://lh3.googleusercontent.com/proxy/RK4-Korl8TJZuAQENmPVt8lHacyvYnCLIkZa5MVEk1NXJs-e0ZZ3Ng_wa--3gVjAgbb9KlCJpvTLYRSUikbhvndnsAz7fbE' },
        { categoryName: 'Вторые блюда', namesOfcategory: 'coldDishes', photo: 'https://milaclub.com/uploads/2018/06/milaclub-vtorye-blyuda.jpg' },
        { categoryName: 'Салаты', namesOfcategory: 'salats', photo: 'http://2.bp.blogspot.com/--SdFD2wWdNI/VU5PwkjWk1I/AAAAAAAAtV8/GJX3e3LKaLM/s1600/panaehali.jpg' },
        { categoryName: 'Закуски', namesOfcategory: 'zakyski', photo: 'https://n1s1.elle.ru/a8/12/c8/a812c807c58af24efdec75abb3ec1cce/620x400_1_ed5a2f597c264e3b4fa17f89de7f97d4@690x445_0xd42ee42a_17071841721400769570.jpeg' },
        { categoryName: 'Напитки', namesOfcategory: 'drinks', photo: 'https://media.vashdosug.ru/media/692336/956x597/' },

    ]
    return (

        <div>
            <div className={cx.CatigoriesContainer}>
                {CatigoriesOfDishes.map((el) => {
                    return <NavLink to={`/category/${el.namesOfcategory}`}> <button className={cx.Dishes}>

                        <div className={cx.DishesPhoto}>
                            <img className={cx.imageStyle} src={el.photo} />

                        </div>
                        <div className={cx.DishesName}>
                            {el.categoryName}

                        </div>
                    </button> </NavLink>

                })}

            </div>

        </div>
    )
}


