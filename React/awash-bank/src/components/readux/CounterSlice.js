import {createSlice} from"@reduxjs/toolkit"
const counterslice =createSlice ({
    name:"counter",
    initialState: {value: 0},
    reducers: {
        add:(state) => {state.value= state.value +1},
        subtract:(state) => {state.value= state.value -1},
        reset:(state) =>{state.value=0},
    }
})
export const {add,subtract,reset}=counterslice.actions
export default counterslice.reducer