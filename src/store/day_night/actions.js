import {DayNightType} from "./types";

export const setDayOrNight = type => ({
    type: DayNightType.SET_DAY_NIGHT,
    payload: type
})

