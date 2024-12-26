import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerId: ""
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerID: (state, action) => {
            state.trailerId = action.payload;
        }
    }
})

export const { addNowPlayingMovies ,addTrailerID } = MovieSlice.actions;

export default MovieSlice.reducer;