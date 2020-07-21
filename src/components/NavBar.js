import React from 'react'

const NavBar = (props) => {
    return (
        <div className="simple-flex-row">
          <button onClick={null /* TODO: Put your method to fetch the songs */}>Get Songs</button> 
            <h1>S-not-ify 🐽</h1>
            <input placeholder="Search by title or artist..."/>
        </div>
      )
}

export default NavBar
