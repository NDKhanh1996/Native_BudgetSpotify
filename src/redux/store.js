import {configureStore} from "@reduxjs/toolkit";
import songQueueReducer from "./feature/songQueueSlice";
import songStateReducer from "./feature/songStateSlice";

export const store = configureStore({
    reducer: {
        songQueue: songQueueReducer,
        songState: songStateReducer,
    }
});