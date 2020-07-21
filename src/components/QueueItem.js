import React from 'react'

const QueueItem = props => {
    return (
        <div>
            <li>
                Title: {props.song.title}, Artist: {props.song.artist}
                <button onClick={() => props.handleDeleteQueueItem(props.index)}> 
                    🗑
                </button>
            </li>
        </div>
        
    )
}

export default QueueItem
