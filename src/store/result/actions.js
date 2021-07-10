import {ResultActionType} from "./types";


export const setResult = input => ({
    type: ResultActionType.SET_RESULT,
    payload: {
        result: input.result,
        haveResult: input.haveResult
    }
})
