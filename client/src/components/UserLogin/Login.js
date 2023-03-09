import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id === null) console.log("id is null");
    props.callBack(id);
  }, [user, props]);

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

  const loginHandler = (val) => {
    console.log(user.email);
    console.log(user);
    getLogin(user);
  };

  //this function will login the user
  function getLogin(userObj) {
    console.log(process.env.REACT_APP_LINK);
    axios
      .post(process.env.REACT_APP_LINK +'/user/login', userObj)
      .then((res) => {
        console.log(res.data);
        console.log(res);
        if (res.data === "") {
          console.log("data is empty");
        } else if (
          userObj.password === res.data.password &&
          userObj.email === res.data.email
        ) {
          localStorage.setItem("id", res.data.id);
          props.callBack(res.data.id);
          return;
        } else {
          console.log("Password is wrong or data is empty");
          alert("Password is wrong or data is empty");
        }
      })
      .catch((e) => {
        console.log("ERROR");
        console.log(e.message);
        alert(e.message);
      });
  }

  return (
    <div className="login_component">
      <div className="box">

        {/* Title */}
        <div className="title">Login</div>
        {/* Cotent of Box */}
        <div className="items">
          <div>
            {/* <label name="email">Email </label> */}
            <input
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={emailHandler}
              name="email"
            />
          </div>

          <div>
            {/* <label name="password">Password </label> */}
            <input
              type="password"
              value={user.password}
              placeholder="Enter Password"
              onChange={passwordHandler}
              name="name"
            />
          </div>

          <button className="bttn" onClick={loginHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
