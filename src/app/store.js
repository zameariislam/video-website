import { configureStore } from '@reduxjs/toolkit';

import videosReducer from '../features/Videos/VideosSlice';


export const store = configureStore({
  reducer: {
  
    videos: videosReducer


  },
});



