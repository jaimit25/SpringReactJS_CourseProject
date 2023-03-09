import React, { useState, useEffect } from "react";
import "./Home.css";
import Search from "./search/Search";
import Tile from "./tile/Tile";
import axios from 'axios';

export default function Home(props) {
  const [search_text, setSearchText] = useState("none");
  const [search_list, setSearchList] = useState([]);

  const search_Handler = (data) => {
    console.log(" this is search Handler " + data);
    setSearchText(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () =>{
    axios.get(process.env.REACT_APP_LINK+'/courses').then((val)=>{
      console.log(val);
      setSearchList(val.data);
    })
  }

  return (
    <div className="home_component">
      <Search search_Handler={search_Handler} />
       { <div className="list_container">
          {search_list.map((val, i) => {
            // return <div>{val.author}</div>
            return <Tile obj={val} key={i} />;
          })}
        </div>}
    </div>
  );
}


// setSearchList([
//   {
//     id: 1,
//     title: "Flutter Begineer",
//     // description : "desc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Neque distinctio voluptates, ipsa architecto sed soluta alias officiis, nesciunt laborum placeat cum voluptatum quaerat possimus iusto doloremque id molestias blanditiis magni eveniet laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. ",
//     link: "Iframe link",
//     author: "Jaimit Panchal",
//   },
//   {
//     id: 2,
//     title: "React Begineer",
//     // description : "desc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Neque distinctio voluptates, ipsa architecto sed soluta alias officiis, nesciunt laborum placeat cum voluptatum quaerat possimus iusto doloremque id molestias blanditiis magni eveniet laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. ",
//     link: "Iframe link",
//     author: "Jaimit Panchal",
//   },
//   {
//     id: 3,
//     title: "C++ Begineer",
//     // description : "desc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Neque distinctio voluptates, ipsa architecto sed soluta alias officiis, nesciunt laborum placeat cum voluptatum quaerat possimus iusto doloremque id molestias blanditiis magni eveniet laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. ",
//     link: "Iframe link",
//     author: "Jaimit Panchal",
//   },
//   {
//     id: 4,
//     title: "Java Begineer",
//     // description : "desc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Neque distinctio voluptates, ipsa architecto sed soluta alias officiis, nesciunt laborum placeat cum voluptatum quaerat possimus iusto doloremque id molestias blanditiis magni eveniet laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. ",
//     link: "Iframe link",
//     author: "Jaimit Panchal",
//   },
//   {
//     id: 5,
//     title: "Dart Begineer",
//     // description : "desc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Neque distinctio voluptates, ipsa architecto sed soluta alias officiis, nesciunt laborum placeat cum voluptatum quaerat possimus iusto doloremque id molestias blanditiis magni eveniet laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. ",
//     link: "Iframe link",
//     author: "Jaimit Panchal",
//   },
//   {
//     id: 6,
//     title: "Python Begineer",
//     // description : "desc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Neque distinctio voluptates, ipsa architecto sed soluta alias officiis, nesciunt laborum placeat cum voluptatum quaerat possimus iusto doloremque id molestias blanditiis magni eveniet laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. ",
//     link: "Iframe link",
//     author: "Jaimit Panchal",
//   },
//   {
//     id: 7,
//     title: "CSS Begineer",
//     // description : "desc",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Neque distinctio voluptates, ipsa architecto sed soluta alias officiis, nesciunt laborum placeat cum voluptatum quaerat possimus iusto doloremque id molestias blanditiis magni eveniet laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima voluptatem eius deleniti quis vitae harum dolores laudantium praesentium atque repellat quas soluta debitis dicta voluptates maxime architecto, natus possimus deserunt inventore facilis expedita quae in esse? Iure, illo nisi praesentium enim est velit illum modi eum qui vitae odit, quas ullam delectus? Similique eveniet enim tempore nisi molestias magnam inventore ad qui, atque quam eum eius itaque quo necessitatibus minima omnis optio dolore, sequi repellat. ",
//     link: "Iframe link",
//     author: "Jaimit Panchal",
//   },
// ]);