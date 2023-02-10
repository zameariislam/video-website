import { configureStore } from '@reduxjs/toolkit';

import videosReducer from '../features/Videos/VideosSlice';
import tagsReducer from '../features/tags/tagsSlice';


export const store = configureStore({
  reducer: {

    videos: videosReducer,
    tags: tagsReducer,


  },
});



