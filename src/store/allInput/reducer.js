import {AllInputActionType} from "./types";

const data = {
    allInput: null
}

const allInputReducer = (state = data, action) => {
    switch (action.type) {
        case AllInputActionType.GET_All_INPUT:
            return {
                ...state,
                allInput: state.allInput ? state.allInput.toString() + action.payload : action.payload

            }
        case AllInputActionType.CHANGE_OPERATION:
            return {
                ...state,
                allInput:
                    state.allInput.toString().charAt(state.allInput.length -2) === "x" ||
                    state.allInput.toString().charAt(state.allInput.length -2) === "+" ||
                    state.allInput.toString().charAt(state.allInput.length -2) === "/"
                        ?state.allInput.toString().slice(0,-2) + action.payload:
                    state.allInput.toString().slice(0, -1) + action.payload

            }
        case AllInputActionType.REMOVE:
            return {
                ...state,
                allInput: null

            }

        default:
            return state
    }
}


export default allInputReducer
