import React from 'react';

import VideoDescription from '../components/description/VideoDescription';


import RelatedVideos from '../components/RelatedVideos/RelatedVideos';


const Video = () => {
    return (
        <>
            <section class="pt-6 pb-20">
                <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    <div class="grid grid-cols-3 gap-2 lg:gap-8">

                        {/* video description  */}

                        <VideoDescription />

                        {/* related videos */}
                       <RelatedVideos/>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Video