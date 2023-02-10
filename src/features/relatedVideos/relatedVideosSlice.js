
//  initial state 

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getrelatedVideos } from "./relatedVideosAPI"


const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ''

}

// async thunk 

export const fetchRelatedVideos = createAsyncThunk(
    'relatedVideos/fetchRelatedVideos', async ({ id, tags }) => {
        
        const relatedVideos = await getrelatedVideos({ id, tags })
        return relatedVideos

    }

)

//  create slice 


const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideos.pending, (state, action) => {

            state.isLoading = true
            state.isError = false
            state.error = ' '

        })
        builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {

            state.isLoading = false
            state.relatedVideos = action.payload

        })

            .addCase(fetchRelatedVideos.rejected, (state, action) => {

                state.relatedVideos = []
                state.isLoading = false
                state.isError = true
                state.error = action?.error?.message

            })
    }

})

export default relatedVideosSlice.reducer




