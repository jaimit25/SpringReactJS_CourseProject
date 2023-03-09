import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import Search from "./search/Search";
import Tile from "./tile/Tile";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();

  const [search_text, setSearchText] = useState("none");
  const [search_list, setSearchList] = useState([]);
  const [orignal_list, setOrignalList] = useState([]);

  const search_Handler = (data) => {
    if (data === "") {
      setSearchList(orignal_list);
      return;
    }
    // setSearchText(data);
    getCurated(data);
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

  const onItemClick = (obj) => {
    console.log(obj.id);
    navigate("/player", {
      state: { id: obj.id, name: obj.name, email: obj.email, link: obj.link },
    });
  };

  return (
    <div className="home_component">
      <Search search_Handler={search_Handler} />

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
              <Tile obj={val} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
