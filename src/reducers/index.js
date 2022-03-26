import {GET_DATA} from '../actions'

const reducer = (state, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                games: [action.payload]
            }
        default:
            return state;
    }
}

export default reducer