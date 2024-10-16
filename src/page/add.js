//refc

import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import '../App.css'
const AddUser=()=>{
    let [value,setvalue]=useState({name:'', email:'',username:''});
    let navigate =useNavigate();
    let change=(e)=>{
        setvalue({...value,[e.target.name]:e.target.value})
    }
    function adduser(e){
        e.preventDefault();
         axios.post("http://localhost:3000/user",value).then(()=>navigate('/'))
    }
    return(
        <div>
          <h1>Add A NEW USER</h1>
          <form action="">
            <input type="text" onChange={change} placeholder="username" name="name" value={value.name}></input>
            <br/>
            <input type="email" onChange={change} placeholder="email adress" name="email" value={value.email}></input>
            <br/>
            <input type="text" onChange={change} placeholder="username" name="username" value={value.username}></input>
            <br/>
            <button onClick={adduser}>AddUser</button>
          </form>
        </div>
    )
}

export default AddUser