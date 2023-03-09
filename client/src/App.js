import React, { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import './App.css'
import Login from './components/UserLogin/Login'
import Register from './components/UserLogin/Register'
import axios from 'axios'


function App() {
  const [id, setId] = useState(null);
  const [page, setPage] = useState("Register");

  useEffect(() => {
    const user_id = localStorage.getItem("id",);
    console.log(user_id)
    if (user_id != null) {
      setId(user_id);
    }
    // getUser();
  });

  const getUser=() => {
    axios.post(`http://localhost:8080/api/v1/user/login`,{
      "email" : "jaimit.jp@gmail.com",
        "password" : "12345678"
    }).then((res)=>{
      console.log(res.config.data);
      console.log(res);

    }).catch(e=>{
      console.log("ERROR");
      console.log(e.message);
    })
  }

  const logouth = () => {
    localStorage.clear();
    setId(null);
  }

  const pageHandler = () => {
    console.log(page)
    if (page === "Login") {
      setPage("Register")
    }
    else setPage("Login")
  }


  return (
      <div className='App'>

        <div className="navbar">
          <ul>
            {id == null && <li><button className='button' onClick={pageHandler}>{page}</button></li>}
            <li><button className='button' onClick={logouth}>Logout</button></li>
          </ul>
        </div>

        <div className="container">
        {
          id === null ? (page === "Register" ? <Login callBack={setId}/> : <Register callBack={setId}/>) : <Home />
        }
        </div>


      </div>

  );
}

export default App;
