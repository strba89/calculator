import {DayNightType} from "./types";

const data = {
    type: 'day'
}

const dayNightReducer = (state = data ,action) => {
    switch (action.type) {
        case DayNightType.SET_DAY_NIGHT:
            return {...state,
                type: action.payload
            }
        default:
            return state
    }
}




export default dayNightReducer
