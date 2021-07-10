import {CurrenInputActionType} from "./types";

const data = {
    currentInput: null
}

const currentInputReducer = (state = data ,action) => {
    switch (action.type) {
        case CurrenInputActionType.SET_CURREN_OPERATION:
            return {...state,
                currentInput: action.payload
            }
        case CurrenInputActionType.SET_CURREN_NUMBER:
            return {...state,
                currentInput:state.currentInput? state.currentInput.toString() + action.payload:action.payload
            }
        case CurrenInputActionType.REMOVE_CURRENT_INPUT:
            return {...state,
                currentInput: null
            }
        default:
            return state
    }
}




export default currentInputReducer
