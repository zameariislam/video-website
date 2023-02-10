import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../../ui/Loading';
import SingleRelatedVideo from './SingleRelatedVideo';

const RelatedVideos = ({ id, tags }) => {

    const {relatedVideos,isLoading,isError,error} = useSelector(state => state.relatedVideos)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(fetchRelatedVideos({ id, tags }))

    }, [dispatch, id, tags])



    let content;
    if (isLoading) {

        content = <Loading/>
    }
    if (!isLoading && isError) {

        content = <div className="col-span-12">{error}</div>
    }
    if (!isLoading && !isError && relatedVideos.length === 0) {

        content = <div className="col-span-12">Somethig Happend</div>
    }
    if (!isLoading && !isError && relatedVideos.length > 0) {

        content = relatedVideos.map(video => <SingleRelatedVideo video={video} key={video.id} />)
    }



    return (
        <div
            class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* single related video  */}
            {
                content
            }
            

        </div>
    );
};

export default RelatedVideos;
