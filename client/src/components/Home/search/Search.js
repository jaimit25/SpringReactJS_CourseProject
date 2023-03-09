import React,{useState} from 'react';
import './Search.css'


function Search(props){

	const [title,setTitle] = useState(""); 

	const title_handler = (val) => { 
		setTitle(val.target.value)
	}
	const searchButton_handler = () => {
		console.log("clicked")
		props.search_Handler(title)
	}

	return <div className='search_component'>
		<div className='search_box'>
			<input className='search_text'  onChange={title_handler} type="text" placeholder='Search for Title' name='search_text' />
			<button onClick={searchButton_handler} className='search_button'>Search</button>
		</div>
	</div>;
}
export default Search;