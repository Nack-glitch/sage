import { createSlice } from "@reduxjs/toolkit";
const counterSlice =createSlice({
    name:"counter",
    initialState:{value:0},
    reducers:{
        increment :(value)=>{
            state.value +=1;
        },
        decrement:(value)=>{
            state.value-=1;
        },
        reset:(value)=>{
            state.value=0;
        },
    }
})
export const{increment,decrement,reset}=counterSlice.actions
export default counterSlice.reducer