import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    listSong: [],
    currentSong: {}
}

const songQueueSlice = createSlice({
    name: 'songQueue',
    initialState,
    reducers: {
        setListSong: (state, action) => {
            state.listSong = action.payload;
        },

        setCurrentSong: (state, action) => {
            state.currentSong = action.payload;
        }
    }
})

export const {setListSong, setCurrentSong} = songQueueSlice.actions;
export default songQueueSlice.reducer;