import {ResultActionType} from "./types";

const data = {
    result: '',
    haveResult: false
}

const resultReducer = (state = data ,action) => {
    switch (action.type) {
        case ResultActionType.SET_RESULT:
            return {...state,
                result: action.payload.result,
                haveResult: action.payload.haveResult
            }
        default:
            return state
    }
}




export default resultReducer
