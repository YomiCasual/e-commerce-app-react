import React from 'react';
import LoadingGif from 'https://cdn.jsdelivr.net/gh/YomiCasual/e-commerce-app-react@master/src/data/gif/loading-arrow.gif'

const Loading = () => {
    return (
    	<div className="Loading text-center mt-2">
    	<h1>Loading data</h1>
        <img src={LoadingGif} alt="loading"/>
        </div>
    );
};



export default Loading;
