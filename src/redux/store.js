import {configureStore} from "@reduxjs/toolkit";
import songQueueReducer from "./feature/songQueueSlice";

export const store = configureStore({
    reducer: {
        songQueue: songQueueReducer,
    }
});