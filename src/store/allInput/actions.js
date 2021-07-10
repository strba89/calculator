import {AllInputActionType} from "./types";


export const getAllInput = input => ({
    type: AllInputActionType.GET_All_INPUT,
    payload: input
})

export const changeOperation = input => ({
    type: AllInputActionType.CHANGE_OPERATION,
    payload: input
})

export const removeAllInput = () => ({
    type: AllInputActionType.REMOVE,
})

