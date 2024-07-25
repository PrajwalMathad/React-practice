import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremenet: (state, action) => {
            state.counter++;
        },
        decremenet: (state, action) => {
            state.counter--;
        },
        reset: (state, action) => {
            state.counter = 0;
        }
    }
})

export const { incremenet, decremenet, reset } = counterSlice.actions;
export default counterSlice.reducer;