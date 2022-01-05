import React from 'react'
import './Board.css';
import Tile from '../Tile'

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  // assign to a variable a call to the map() method of the tiles prop. 
  // Pass an anonymous function that takes tile as a parameter, 
  // and returns an instantiation of the <Tile /> 
  // Using object spread syntax to pass the tile object as props.
  const tiles = props.tiles.map( tile => <Tile {...tile} /> )

  return (
    <div className='Board' style={gridConfig}>
      {tiles}
    </div>
  )
}

export default Board
