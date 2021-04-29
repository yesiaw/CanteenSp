const SET_BASKET_DISHES = 'SET_USER_DATA';
const REMOVE_BASKET_DISHES = 'REMOVE_BASKET_DISHES'

let initialState = {
    dishes: [],


}

const BasketReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_BASKET_DISHES:
            {const dishIndex = state.dishes.findIndex((dish) => dish.name === action.data.name)
            if (dishIndex === -1) {
                return {
                    ...state,
                    dishes: [...state.dishes, { name: action.data.name, cost: action.data.cost, quantity: 1 }]
                }
            }
            // debugger;
            const dish = { ...state.dishes[dishIndex] };
            const newDishes = [...[...state.dishes].slice(0, dishIndex), { ...dish, quantity: dish.quantity + 1 }, ...[...state.dishes].slice(dishIndex + 1)];
            return {
                ...state,
                dishes: newDishes
            }}

        case REMOVE_BASKET_DISHES:
            {const dishIndex = state.dishes.findIndex((dish) => dish.name === action.data.name)
            const dishwillRemove = {...state.dishes[dishIndex]}
            if (dishwillRemove.quantity === 1) {
                const newDishes = [...[...state.dishes].slice(0, dishIndex), ...[...state.dishes].slice(dishIndex + 1)];
                return {
                    ...state, 
                    dishes: newDishes
                }
            }
            const newDishesRemove = [...[...state.dishes].slice(0, dishIndex), { ...dishwillRemove, quantity: dishwillRemove.quantity - 1 }, ...[...state.dishes].slice(dishIndex + 1)];
            
            return {
                ...state,
                dishes: newDishesRemove
            }}


        default: return state;
    }


}

export const setDishes = (data) => ({ type: SET_BASKET_DISHES, data })
export const removeDishes = (data) => ({ type: REMOVE_BASKET_DISHES, data })

export default BasketReducer;