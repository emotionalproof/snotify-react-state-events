import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

class MainContainer extends React.Component {

    state = {
        currentSong: {}
    }

    handleClickPlayNow = id => {
        let song = this.props.songs.find(song => song.id === id)
        this.setState({
            currentSong: song
        })
    }


    render() {
        console.log(this.props.currentQueue)
        return (
            <div className="simple-flex-row top">
                <SongList 
                    songs={this.props.songs}
                    handleFavoriteClick={this.props.handleFavoriteClick}
                    handleClickPlayNow={this.handleClickPlayNow}
                    handleAddToQueue={this.props.handleAddToQueue}
                />
                <Queue 
                    currentSong={this.state.currentSong}
                    currentQueue={this.props.currentQueue}
                    handleDeleteQueueItem={this.props.handleDeleteQueueItem}
                /> 
            </div>
    )}
    
}

export default MainContainer;

