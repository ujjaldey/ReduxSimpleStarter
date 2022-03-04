import React from 'react';

const VideoList = (props) => {
    // in class based component, we should refer as this.props
    // in functional component, we can directly refer as props
    return (
        <ul className='col-md-4 list-group'>
            {props.videos.length}
        </ul>
    );
}

export default VideoList;
