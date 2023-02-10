import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/Videos/VideosSlice';
import VideoGridItem from './VideoGridItem';

const VideoGrid = () => {

    const videos = useSelector(state => state.videos)
    console.log(videos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchVideos())

    }, [])


    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* single video */}
                    <VideoGridItem />


                    {/* error section */}
                    {/* <div className="col-span-12">some error happened</div> */}
                </div>
            </section>
        </section>
    );
};

export default VideoGrid;