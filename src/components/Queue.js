import React from 'react';
import QueueItem from './QueueItem';

const Queue = props => {
    let currentSong = props.currentSong
    
    const renderQueueItems = () => (
        props.currentQueue.length === 0 ?
            <h2>You do not have any songs in your queue.</h2> :
            props.currentQueue.map((song, index) => <QueueItem song={song} index={index} key={index} handleDeleteQueueItem={props.handleDeleteQueueItem} />)
    )


    return (
        <div className="half queue">
            <h2>Queue</h2>
            {currentSong && <iframe 
                title={currentSong.title}
                width="361" 
                height="215" 
                src={`${currentSong.url}?autoplay=1&mute=1`}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
            </iframe>}
            <ol>
                {renderQueueItems()}
            </ol>
        </div>
    )
}

export default Queue;