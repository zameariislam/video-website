import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import VideoDescription from '../components/description/VideoDescription';


import RelatedVideos from '../components/RelatedVideos/RelatedVideos';
import { fetchVideo } from '../features/video/videoSlice';
import Loading from '../ui/Loading';


const Video = () => {
    const { videoId } = useParams()

    const { isLoading, isError, error, video } = useSelector(state => state.video)
    const dispatch = useDispatch()
   

    useEffect(() => {
        dispatch(fetchVideo(videoId))

    }, [dispatch, videoId])


    // decide  what to render 
    let content;
    if (isLoading) {

        content = <Loading />
    }
    if (!isLoading && isError) {

        content = <div className="col-span-12">{error}</div>
    }
    if (!isLoading && !isError && !video.id) {

        content = <div className="col-span-12">Somethig Happend</div>
    }
    if (!isLoading && !isError && video.id) {

        content = <VideoDescription video={video} />
    }





    return (
        <>
            <section class="pt-6 pb-20">
                <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    <div class="grid grid-cols-3 gap-2 lg:gap-8">

                        {/* video description  */}

                        {content}

                        {/* related videos */}
                        <RelatedVideos id={videoId} tags={video.tags} />
                    </div>
                </div>
            </section>


        </>
    );
};

export default Video