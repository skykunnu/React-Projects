import { createSlice } from "@reduxjs/toolkit";


export const slice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:function (state, action) {
            state.count=state.count+1;
        },
        decrement:function (state, action) {
            state.count=state.count-1;
        },
    },
});

export const {increment, decrement} = slice.actions;
const counterReducer=slice.reducer;
export default counterReducer;