import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

// Redux - obrabot4ik sostoyanija dlja raznyh bibliotek.
// Osnovy redux o4en shogi s react sostoyaniem.
// Kak i u react sostoyanija, tak i u redux est izna4alnoe sostoyaniye i funkzija dlya izmeneniya sostoyaniya.
// izna4alnoe sostojsnie - eto object, v kot hranyatsya raznye svojstva/sostoyanija.

const initialState = {
    durationRange: 1,
    lowPriceTimestamp: null,
    errorMessage: null
};

// Funkzii izmenenija sostojanija v redux nazyvautsya - 'Action'.
// Action sozdaet object, v kot est ego tip i object payload, v kot budet nahoditsya novoe sostoyanie.

export const setDurationRange = createAction("setDurationRange");
export const setLowPriceTimestamp = createAction("setLowPriceTimestamp");
export const setErrorMessage = createAction("setErrorMessage");

// Reducer ispolzuetsya dlya opredelenija, 4to budet delat Action pri ego inicializacii.
// My sozdaem funkzii s nazvaniem actiona, v kot menyaem sostojanie.
const reducer = createReducer(initialState, {
    [setDurationRange]: (state, action) => {
        state.durationRange = action.payload;
    },
    [setLowPriceTimestamp]: (state, action) => {
        state.lowPriceTimestamp = action.payload;
    },
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    }
});

// Store - oblako, v kotorom hranitsya vsya informazija o redux sostoyanii.
export const store = configureStore({ reducer });

