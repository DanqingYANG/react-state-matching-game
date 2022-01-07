import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'

import './App.css';
import {createTiles, indexOfSelected} from '../../misc/utils'

class App extends Component{

  constructor(props)
  {
    super(props)

    this.state = {
      numTiles : 36,
      playing : false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared : null,
      }
  }

  startGame= (numTiles) => {
    this.setState((state) => {
      return{
        playing: true,
        previousTileIndex: null,
        toBeCleared: null, 
        tiles: createTiles(state.numTiles, this.handleTileClicked()),
      }
    })
  }

  handleTileClicked = (id,color) => {
    this.setState((state) => {
      const tiles = this.state.tiles
      const toBeCleared = this.state.toBeCleared
      const selectedTileIndex = indexOfSelected(tiles, id,color)
      const previousTileIndex = this.state.previousTileIndex

      // Clear mismatched tiles
      if(toBeCleared !== null)
      {
        tiles[toBeCleared[0]].selected = false
        tiles[toBeCleared[1]].selected = false
        toBeCleared = null
      }

      if( previousTileIndex !== null )
      {
        const previousTile = this.state.tiles[previousTileIndex]
        const selectedTile = this.state.tiles[selectedTileIndex]
        
        // Handle a matched tile
        if(previousTile.id !== selectedTile.id && previousTile.color === color)
        {
          selectedTile.matched = true
          previousTile.matched = true
          previousTileIndex = null
        }
        else
        {// mismatched
          previousTileIndex = selectedTileIndex
          toBeCleared = [previousTileIndex, selectedTileIndex]
          previousTileIndex = null
        }
      }
      
      // Set the clicked tile to selected
      tiles[selectedTileIndex].selected = true

      return{
        toBeCleared,
        tiles,
      }
    })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel 
        startGame={this.startGame.bind(this)} 
        playing={this.state.playing} 
        numTiles={this.state.numTiles}/>
        <Board 
        numTiles={this.state.numTiles} 
        tiles={this.state.tiles}/>
    </div>
  );

  }
}

export default App;
