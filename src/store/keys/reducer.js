import data  from '../../dataJSON/keys.json'
import {KeyActionType} from "./types";



const keyReducer = (state = data ,action) => {
    switch (action.type) {
        case KeyActionType.GET_KEYS:
            return {...state,
                key: action.payload
            }
        default:
            return state
    }
}




export default keyReducer
