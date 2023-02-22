import React,{useState,useEffect} from 'react'
import './Login.css'
import axios from 'axios';

export default function Login(props) {

  const [user,setUser] = useState({
    email : "",
    password : "" ,
  });

  useEffect(()=>{
   const id = localStorage.getItem('id');
   if(id === null) console.log("id is null");
      props.callBack(id)
  },[user,props])


    const emailHandler = (val) => {
      setUser({
        ...user,
        email : val.target.value
      })
    }
    const passwordHandler = (val) => {
      setUser({
        ...user,
        password : val.target.value
      })
    }

   const loginHandler = (val) => {
      console.log(user.email)
      console.log(user)
        getLogin(user);
    }
    
    //this function will login the user
    function getLogin(userObj){
      axios.post(`http://localhost:8080/api/v1/user/login`,userObj).then((res)=>{
        console.log(res.data);
        console.log(res);
        if(res.data === ''){
          console.log("data is empty")
        }
        else if(userObj.password === res.data.password && userObj.email === res.data.email)
        {
          localStorage.setItem('id',res.data.id)
          props.callBack(res.data.id);
          return ;
        }
        else console.log("Password is wrong or data is empty")
      }).catch(e=>{
        console.log("ERROR");
        console.log(e.message);
      })
    }

  return (

    <div className="login_component">
     <div>
        <label name="email">Email  </label>
        <input type="email" value={user.email} onChange={emailHandler} name='email'/>
      </div>

      <div>
        <label name="password">Password  </label>
        <input type="password" value={user.password} onChange={passwordHandler} name='name'/>
      </div>

      <button className="btn" onClick={loginHandler}>Submit</button> 
    </div>
  )
}
