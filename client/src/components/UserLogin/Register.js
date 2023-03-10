import React, { useState, useEffect } from "react";
import "./Register.css";
import axios from "axios";

export default function Register(props) {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    link: "User",
    id: 0,
  });

  useEffect(() => {
    initialID();
  });

  function initialID() {
    const idd =
      Math.floor(Math.random() * 100) + Math.floor(Math.random() * 12);
    setUser({
      ...user,
      id: idd,
    });
  }

  const nameHandler = (val) => {
    console.log("name : " + val.target.value);
    setUser({
      ...user,
      name: val.target.value,
    });
  };
  const emailHandler = (val) => {
    setUser({
      ...user,
      email: val.target.value,
    });
  };
  const passwordHandler = (val) => {
    setUser({
      ...user,
      password: val.target.value,
    });
  };

  const registerHandler = (val) => {
    console.log(user.email);
    check_user_exist(user);
  };

  function check_user_exist(userObj) {
    if(user.name !== "" && user.email !== "" && user.password !==""){
      if (userObj.id !== 0) {
      console.log(userObj.id);
      console.log({
        email: user.email,
        password: user.password,
      });
      axios
        .post(process.env.REACT_APP_LINK +'/user/login', {
          email: user.email,
          password: user.password,
        })
        .then((res) => {
          if (res.data !== "") {
            console.log("user already exist");
            console.log(res.data.name);
            alert("User Already Exist")
            return true;
          } else {
            createUser(userObj);
          }
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
    }else{
      alert("Please Fill all the Data ")
    }
    return false;
  }

  function createUser(userObj) {
    axios
      .post(process.env.REACT_APP_LINK +'/user', user)
      .then((res) => {
        console.log(res.body);
        console.log(res.data);
        console.log("SUCCESS USER CREATED");
        localStorage.setItem("id", userObj.id);
        setUser({
          email: "",
          id: 0,
          name: "",
          password: "",
          link: "",
        });
        props.callBack(userObj.id);
      })
      .catch((e) => {
        console.log("ERROR");
        console.log(e.message);
      });
  }

  return (
    <div className="register_component">
      <div className="box">
        <div className="title">Register</div>
        <div className="items">
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              value={user.name}
              onChange={nameHandler}
              name="name"
            />
          </div>

          <div>
            <input
              placeholder="Enter email"
              type="email"
              value={user.email}
              onChange={emailHandler}
              name="email"
            />
          </div>

          <div>
            <input
              placeholder="Enter Password"
              type="password"
              value={user.password}
              onChange={passwordHandler}
              name="name"
            />
          </div>

          <button className="bttn" onClick={registerHandler}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
