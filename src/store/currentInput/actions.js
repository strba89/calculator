import {CurrenInputActionType} from "./types";


export const setCurrentOperation = input => ({
    type: CurrenInputActionType.SET_CURREN_OPERATION,
    payload: input
})
export const setCurrentNumber = input => ({
    type: CurrenInputActionType.SET_CURREN_NUMBER,
    payload: input
})
export const removeCurrentInput = () => ({
    type: CurrenInputActionType.REMOVE_CURRENT_INPUT,
})

