import React from 'react';

const SongItem = props => {

    const handleLike = (event) => {
        let currentLikes = parseInt(event.target.textContent.split(":")[1])
        let newLikes = parseInt(currentLikes) + 1
        event.target.textContent = `Likes: ${newLikes}`
    }

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td><button onClick={() => props.handleClickPlayNow(props.id)} name="play">Play Now</button></td>
            <td><button onClick={() => props.handleAddToQueue(props.id)} name="queue">Add to Queue</button></td>
            <td onClick={() => props.handleFavoriteClick(props.id)} name="favorite">{props.favorite === "true" ? "💚" : "♡"}</td>
            <td name="like" onClick={(event) => handleLike(event)}>Likes: 0</td>
        </tr>
    )
}

export default SongItem;