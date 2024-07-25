import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const store = configureStore({
    reducer: {
        counterReducer,
        userReducer
    }
});

export default store;