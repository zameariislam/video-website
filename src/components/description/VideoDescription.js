import React from 'react';
import Description from './Description';
import LikeUnLike from './LikeUnLike';
import Player from './Player';

const VideoDescription = () => {
    return (
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
                             {/* video player  */}
                             <Player/>
                           

                            {/* video description  */}
                            <div>
                                <h1
                                    class="text-lg font-semibold tracking-tight text-slate-800"
                                >
                                    Some video title
                                </h1>
                                <div
                                    class="pb-4 flex items-center space-between border-b"
                                >
                                    <h2
                                        class="text-sm leading-[1.7142857] text-slate-600 w-full"
                                    >
                                        Uploaded on 23 Nov 2022
                                    </h2>

                                     {/* like/unlike  */}
                                    <LikeUnLike/>
                                </div>

                                <div
                                    class="mt-4 text-sm text-[#334155] dark:text-slate-400"
                                >
                                    Some video description here
                                </div>
                            </div>
                        </div>
    );
};

export default VideoDescription;