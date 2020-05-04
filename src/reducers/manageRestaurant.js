
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    
    switch (action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {
                text: action.restaurant,
                id: cuid()
            }
            return { 
                ...state,
                restaurants: state.restaurants.concat(restaurant)
             }
        
        case "DELETE_RESTAURANT":
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            return Object.assign({}, state, {restaurants})
        
        case "ADD_REVIEW":
            const review = {
                text: action.review.text,
                id: cuid(),
                restaurantId: action.review.restaurantId
            }
            return {
                ...state,
                reviews: [...state.reviews, review]
            }
        
        case "DELETE_REVIEW":
            const reviews = state.reviews.filter(review => review.id !== action.id)
            return Object.assign({}, state, { reviews })
        
        case "UPDATE_RESTAURANT":
            const rest = state.restaurants.filter(restaurant => restaurant.id === action.restaurant.id)
            // debugger
            return {
                ...state,
                restaurants: [...state.restaurants, rest.text = action.restaurant.text]
            }
        
        default: 
            return state
    }
}
