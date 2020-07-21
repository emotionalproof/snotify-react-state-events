import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';


let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: [],
    currentQueue: []
  }
  

  fetchSongs = () => {
    fetch(API_ENDPOINT)
    .then(resp => resp.json())
    .then(songData => {
      this.setState({
        songs: songData
      })
    })
  }

  handleFavoriteClick = (id) => {
    let song = this.state.songs.find(song => song.id === id)
    let newFavStatus = song.favorite === "true" ? "false" : "true"
    this.patchSong(id, newFavStatus)
  }

  patchSong = (id, newFavStatus) => {
    fetch(API_ENDPOINT.concat(`/${id}`),{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "favorite": `${newFavStatus}`
      })
    })
      .then(resp => resp.json())
      .then(promise => {
        console.log(promise)
        this.fetchSongs()
      })
  }

  componentDidMount() {
    this.fetchSongs()
  }

  handleAddToQueue = id => {
    let queuedSong = this.state.songs.find(song => song.id === id)
    this.setState(previousState => {
      return {
        currentQueue: previousState.currentQueue.concat([queuedSong])
      }
    })
  }

  handleDeleteQueueItem = index => {
    console.log(index)
    this.setState(previousState => {
      return {
        currentQueue: previousState.currentQueue.splice(index, 1)
      }
    })
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <MainContainer 
          songs={this.state.songs}
          handleFavoriteClick={this.handleFavoriteClick}
          currentQueue={this.state.currentQueue}
          handleAddToQueue={this.handleAddToQueue}
          handleDeleteQueueItem={this.handleDeleteQueueItem}
        /> 
      </div>
    );
  }
}

export default App;