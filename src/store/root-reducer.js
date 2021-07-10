import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import resultReducer from './result/reducer';
import currentInputReducer from "./currentInput/reducer";
import keyReducer from "./keys/reducer";
import allInputReducer from "./allInput/reducer";
import dayNightReducer from "./day_night/reducer";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['calculator']
};

const rootReducer = combineReducers({
    result: resultReducer,
    currentInput: currentInputReducer,
    keyItems: keyReducer,
    allInput: allInputReducer,
    dayNight: dayNightReducer
});

export default persistReducer(persistConfig, rootReducer);