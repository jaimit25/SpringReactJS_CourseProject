import React,{useState,useEffect} from 'react'
import './Register.css'
import axios from 'axios';


export default function Register(props) {
  const [user,setUser] = useState({
    name : "",
    email : "",
    password : "" ,
    link : "User",
    id:0
  });

useEffect(()=>{
  initialID();
},[])

function initialID(){
  const idd = Math.floor(Math.random() * 100)+ Math.floor(Math.random()*12);
  setUser({
    ...user,
    id : idd
  });
}

  const nameHandler = (val) => { 
    console.log("name : " + val.target.value) 
    setUser({
      ...user,
      name : val.target.value
    })
  }
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

  const registerHandler = (val) => {
    console.log(user.email)
    check_user_exist(user)
  }


  function check_user_exist(userObj){
    if(userObj.id !== 0){
      console.log(userObj.id)
      console.log({
        email:user.email,
        password:user.password
      });
      axios.post(`http://localhost:8080/api/v1/user/login`,{
        email:user.email,
        password:user.password
      }).then(res=>{
        if(res.data!==''){
          console.log('user already exist');
          console.log(res.data.name)
          return true;
        }
        else{
          createUser(userObj);
        }
      }).catch(e=>{
        console.log(e.message);
      })
  }
  return false;
}

  function createUser(userObj){
    axios.post(`http://localhost:8080/api/v1/user`,user).then((res)=>{
      console.log(res.body);
      console.log(res.data);
      console.log("SUCCESS USER CREATED");
      localStorage.setItem('id',userObj.id)
      setUser({
        email:"",
        id : 0,
        name:"",
        password:"",
        link:"",
      })
      props.callBack(userObj.id)

    }).catch(e=>{
      console.log("ERROR");
      console.log(e.message);
    })
    }
    


  return (
    <div className="register_component">
     <div>
      <div>
        <label name="name">Name  </label>
        <input type="text" value={user.name} onChange={nameHandler} name='name'/>
      </div>

      <div>
        <label name="email">Email  </label>
        <input type="email" value={user.email} onChange={emailHandler} name='email'/>
      </div>

      <div>
        <label name="password">Password  </label>
        <input type="password" value={user.password} onChange={passwordHandler} name='name'/>
      </div>

      <button className="btn" onClick={registerHandler}>Submit</button>         

     </div>
    </div>
  )
}
