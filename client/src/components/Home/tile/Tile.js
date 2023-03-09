import React from 'react'
import './Tile.css'

export default function Tile(props) {
  return (
    <div className='tile_container'>
      {/* {props.obj.title} */}
      <div className="tile_imgBox"></div>

      <div className="tile_details">
        <p className='tile_title'>{props.obj.title}</p>
        <p className='tile_author'>{ "From : "+props.obj.author}</p>
        <p className='tile_description'>{props.obj.description.split(" ").length > 250 ? props.obj.description.substring(0,400) + "...":props.obj.description}</p>
      </div>

    </div>
  )
}
