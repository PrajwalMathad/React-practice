import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    userName: "",
    password: "",
    isAuthenticated: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setusers: (state, action) => {
            state.users = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setIsAuthenticated: (state, action) => {
            if(state.isAuthenticated) {
                state.userName = "";
                state.password = "";
            }
            state.isAuthenticated = !state.isAuthenticated;
        }
    }
})

export const { setUserName, setPassword, setIsAuthenticated, setusers } = userSlice.actions;
export default userSlice.reducer;