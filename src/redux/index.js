import { combineReducers } from 'redux';

import gitRepository from './gitRepositorySlice';

const combinedReducers = combineReducers({
    gitRepository
});

const reducer = (state, action) => {
    return combinedReducers(state, action);
};

export default reducer;