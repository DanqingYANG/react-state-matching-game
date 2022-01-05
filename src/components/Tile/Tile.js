import React from 'react'

import './Tile.css'

const Tile = (props) => {

  // Declare a variable to hold our dynamic color. 
  // Assign to this variable a ternary statement. 
  // The condition will be if either the selected value from props is true, or the matched value from props is true.
  // it should evaluate to 
  // an object literal with a key of backgroundColor and a value which is the color prop.
  const color = props.selected || props.matched ? { backgroundColor : props.color } : null;

  // Conditionally render the svg
  return (
    <div className='Tile' style={color}>
      { props.selected || props.matched ?<props.svg/>:null }
    </div>
  )
}

export default Tile
