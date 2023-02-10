import React from 'react';

import VideoGrid from '../components/grid/VideoGrid';

import Tags from '../components/Tags/Tags';
import Pagination from '../ui/Pagination';

const Home = () => {
    return (
        <>
           
            <Tags />
            <VideoGrid />
            <Pagination />
           


        </>
    );
};

export default Home;