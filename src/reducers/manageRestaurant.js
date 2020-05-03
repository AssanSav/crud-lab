
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
            return {
                restaurants: restaurants
            }
        
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
        
        default: 
            return state
    }
}
