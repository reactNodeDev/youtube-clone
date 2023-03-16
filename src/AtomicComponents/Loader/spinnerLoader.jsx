import React from 'react';
import Lottie from 'react-lottie';
import Spinner from './98891-insider-loading.json'

const SpinnerLoader = () => {
    const defaultOptions = {
        animationData:Spinner
    }
    return (
        <div className='h-24 w-24'>
            <Lottie options={defaultOptions} height={20} width={20}/>
        </div>
    );
};

export default SpinnerLoader;