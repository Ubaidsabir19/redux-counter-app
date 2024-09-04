import { createSlice } from "@reduxjs/toolkit";

const initialState = { coin: 0 }; 

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.coin++;
        },
        decrement: (state) => {
            state.coin--;
        },
        incrementByAmount: (state, action) => {
            state.coin += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.coin -= action.payload;
        },
        remove: (state) => {
            state.coin = 0;
        },
    }
});

export const { increment, decrement, incrementByAmount, decrementByAmount, remove } = counterSlice.actions;

export default counterSlice.reducer;
