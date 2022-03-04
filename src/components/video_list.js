import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    // in class based component, we should refer as this.props
    // in functional component, we can directly refer as props
    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
};

export default VideoList;
