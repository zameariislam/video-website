
//  initial state 

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosAPI"

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''

}

// async thunk 

export const fetchVideos = createAsyncThunk(
    'videos/fetchVideos', async () => {
        const videos = await getVideos()
        return videos

    }

)

//  create slice 


const videosSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state, action) => {

            state.isLoading = true
            state.isError = false
            state.error = ' '

        })
        builder.addCase(fetchVideos.fulfilled, (state, action) => {

            state.isLoading = false
            state.videos = action.payload

        })

            .addCase(fetchVideos.rejected, (state, action) => {

                state.videos = []
                state.isLoading = false
                state.isError = true
                state.error = action?.error?.message

            })
    }

})

export default videosSlice.reducer




