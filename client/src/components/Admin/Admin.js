import React, { useEffect, useState } from "react";
import axios from "axios";
import Tile from "../Home/tile/Tile";
import "../Home/tile/Tile.css";
import AdminTile from "./Tile/AdminTile";
import "./Admin.css";
import { useNavigate, Link } from "react-router-dom";


export default function Admin() {
  const [page, setPage] = useState("layout");
  const [pass, setPassword] = useState(false);


  const [search_text, setSearchText] = useState("none");
  const [search_list, setSearchList] = useState([]);
  const [orignal_list, setOrignalList] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {

    // temporarily commented and true
    validatePassword();

  }, []);

  const validatePassword = () => {
    var pass_ = prompt("Enter Password");
    if (pass_ === "admin") setPassword(true);
    else validatePassword();
  };

  const search_Handler = () => {
    if (search_text === "") {
      setSearchList(orignal_list);
      return;
    }
    // setSearchText(data);
    getCurated(search_text);
  };

  const getCurated = (txt) => {
    console.log("Curating list  ");
    var curated_list = [];
    if (orignal_list.length !== 0) {
      console.log(orignal_list);
      for (var i = 0; i < orignal_list.length; i++) {
        if (orignal_list[i].title.search(txt) !== -1) {
          curated_list.push(orignal_list[i]);
        }
      }
    }
    setSearchList(curated_list);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(process.env.REACT_APP_LINK + "/courses").then((val) => {
      // console.log(val);
      setSearchList(val.data);
      setOrignalList(val.data);
    });
  };

  const search_textHandler = (txt) => {
    console.log(txt.target.value);
    setSearchText(txt.target.value);
  };

  const deleteHandler = (id) => {
    console.log("Deleting.." + id);
    axios
      .delete(process.env.REACT_APP_LINK + "/courses/" + id)
      .then((val) => {
        console.log("Deleted" + val);
        console.log(val);
      })
      .catch((e) => {
        console.log(e.message);
      });
    setSearchList(search_list);
  };

  const Add_handler = () => {
    setPage("add")
  };

  const onItemClick = (obj) => {
    console.log("clicked : " + obj);
    navigate("/player", {
      state: { id: obj.id, name: obj.name, email: obj.email, link: obj.link },
    });
  };

  const layout = (
    <div className="admin_component">
      <div className="search_component">
        <div className="search_box">
          <input
            className="search_text"
            onChange={search_textHandler}
            type="text"
            placeholder="Search for Title"
            name="search_text"
          />
          <button onClick={search_Handler} className="search_button">
            Search
          </button>
          <button onClick={Add_handler} className="search_button">
            Add
          </button>
        </div>
      </div>

      <div className="list_container">
        {search_list.map((val) => {
          return (
            <div
              className="item_list"
              key={val.id}
              onClick={() => {
                onItemClick(val);
              }}
            >
              <AdminTile deleteHandler={deleteHandler} obj={val} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [author, setAuthor] = useState('');

  const titleHandler = (txt)=>{
    console.log(txt.target.value);
    setTitle(txt.target.value);
  }
  const descHandler = (txt)=>{
    console.log(txt.target.value);
    setDescription(txt.target.value)
  }
  const authorHandler = (txt)=>{
    console.log(txt.target.value);
    setAuthor(txt.target.value);
  }
  const iframeHandler = (txt)=>{
    console.log(txt.target.value);
    setLink(txt.target.value);
  }

  const submitHandler = () =>{
    console.log("submit");
    if(title !== "" && author !== "" && link!=="" && description!==""){
      let x = (Math.random() * 100) + (1000*Math.random()+1000*Math.random());
      console.log(x)
      var obj = {
          id:x,
          title:title,
          description:description,
          link:link,
          author:author
        };
      
      axios.post(process.env.REACT_APP_LINK+'/course',obj).then((val)=>{
        console.log(val);
        console.log("Success");
        setPage("layout")
        console.log(page)
        setTitle("");
        setDescription("")
        setLink("")
        setAuthor("")
  
        alert("Successfully Added Course")
        return;
      }).catch(e=>{
        alert("Error")
      })
    }
    else{
      alert("Fill all the Details Correctly")
    }
  }

  const addpage = (
    <div className="Add_layout">
      <div className="_addform">
          <div className="_addtitle">Add Courses</div>
          <div className="_addcontainer">
              <p className="_addlabel">Title:</p>
              <input type="text" value={title} placeholder="Enter Title" className="_addinput" onChange={titleHandler}/>

              <p className="_addlabel">Description :</p>
              <input type="text" value={description} placeholder="Enter Description" className="_addinput" onChange={descHandler}/>

              <p className="_addlabel">Author:</p>
              <input type="text" value={author} placeholder="Enter Author" className="_addinput" onChange={authorHandler}/>

              <p className="_addlabel">I-Frame :</p>
              <input type="text" value={link} placeholder="Enter Iframe" className="_addinput" onChange={iframeHandler}/>

              <div className="_addsubmit">
                  <button  className="btn _addsubmit" onClick={submitHandler}>Submit</button>
              </div>
          </div>
      </div>
    </div>
  );


  function getPage(){
    switch(page){
      case "layout": 
      return layout;
      break;
      case "add":
        return addpage;
        break;
    }
  }
  return (
    <div>{
      pass === false ?
       <div>Enter Valid Credentials</div> 
       : getPage()
      }</div>
  );
}
