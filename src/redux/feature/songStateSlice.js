import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    songRunning: false,
}

const songStateSlice = createSlice({
    name: 'songState',
    initialState,
    reducers: {
        setSongRunning: (state, action) => {
            state.songRunning = action.payload;
        },
    }
})

export const {setSongRunning} = songStateSlice.actions;
export default songStateSlice.reducer;