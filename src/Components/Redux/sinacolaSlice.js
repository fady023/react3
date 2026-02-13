import { createSlice } from "@reduxjs/toolkit";

const sinacolaState = {
    counter: 20
};;

export const sinacolaSlice = createSlice({
    name: "sinacola",
    initialState: sinacolaState,
    reducers: {
        ordersinacola: (state) => {
            state.counter--;
        },
        reStocksinacola: (state) => {
            state.counter++;
        }
    }
})