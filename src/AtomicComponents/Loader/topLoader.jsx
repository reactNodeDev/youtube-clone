import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useLoading } from '../../context/topLoaderContext';

const TopLoader = () => {
    const {progress, setProgress} = useLoading()
    return (
        <>
            <LoadingBar
                color='#FF0000'
                height={'3px'}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
        </>
    );
};

export default TopLoader;