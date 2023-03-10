import React from 'react'
import "./AdminTile.css"


export default function AdminTile(props) {


	const deleteHandlerReq = () => {
		props.deleteHandler(props.obj.id);
	}
	return (
		<div className='admin_tile_container'>
			{/* {props.obj.title} */}
			<div className="admin_tile_imgBox"></div>
			<div className="admin_tile_details">
				<p className='admin_tile_title'>
					{props.obj.title}
					<button onClick={deleteHandlerReq} className="btn admin_Deletebtn">Delete</button>
				</p>
				<p className='admin_tile_author'>{"From : " + props.obj.author}</p>
				<p className='admin_tile_description'>{props.obj.description.split(" ").length > 250 ? props.obj.description.substring(0, 400) + "..." : props.obj.description}</p>
			</div>

		</div>
	)
}
