import moment from 'moment/moment';
import React from 'react';

const VideoLength = ({lengthSeconds}) => {
    const videoLength = moment().startOf("day").seconds(lengthSeconds).format(`${lengthSeconds>=3600 ?'hh:mm:ss':'mm:ss'}`) 
    return (
        <div className=' absolute bottom-2 right-2 bg-black text-white rounded-md p-[5px] text-xsm opacity-[0.9]'>
            <span>{videoLength}</span>
        </div>
    );
};

export default VideoLength;