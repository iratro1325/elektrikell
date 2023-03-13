import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    hourRange: 1,
    lowPriceTimestamp: null,
    errorMessage: null,
    showForm: false,
    activePrice: 'low',
    currentPrice: 0,
};

export const setHourRange = createAction("setHourRange");
export const setLowPriceTimestamp = createAction("setLowPriceTimestamp");
export const setErrorMessage = createAction("setErrorMessage");
export const setShowForm = createAction("setShowForm");
export const setActivePrice = createAction("setActivePrice");
export const setCurrentPrice = createAction("setCurrentPrice");

const reducer = createReducer(initialState, {
    [setHourRange]: (state, action) => {
        state.hourRange = action.payload;
    },
    [setLowPriceTimestamp]: (state, action) => {
        state.lowPriceTimestamp = action.payload;
    },
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    },
    [setShowForm]: (state, action) => {
        state.showForm = action.payload;
    },
    [setActivePrice]: (state, action) => {
        state.activePrice = action.payload;
    },
    [setCurrentPrice]: (state, action) => {
        state.currentPrice = action.payload;
    }
});

export const store = configureStore({ reducer });

