import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import JsxParser from 'react-jsx-parser'

export default function Player(props) {
	const location = useLocation();
	console.log("PAGE(PLAYER): "+location.state);
	document.body.requestFullscreen();
	return (

		//jsx parser converts string to jsx code
		<JsxParser jsx={location.state.link}>
		</JsxParser>
	)
}
