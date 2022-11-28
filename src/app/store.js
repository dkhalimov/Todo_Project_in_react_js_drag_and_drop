import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../slices/todoSelice';

export const store = configureStore ({
    reducer: {
        todo: todoReducer,
    },
});