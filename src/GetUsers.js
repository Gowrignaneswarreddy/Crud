// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const GetUsers=()=>{
//     let[state,setState]=useState([])
//     let[thead,setThead]=useState([])
//     useEffect(()=>{
//         axios.get("")
//         .then(res=>{
//         setState (res.data);
//         setThead(Object.keys(res.data[1]).slice(0,4))
//     });
//     },[])
    // console.log(state);
    
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'
import './index.css'
const GetUsers = () => {
    const[api,setapi]=useState([])
    const [thead,setThead]=useState([])
    let navigate=useNavigate();
    useEffect(()=>
    {
        axios.get("http://localhost:3000/user").then((x)=>{
            setapi(x.data)
            setThead(Object.keys(x.data[0]).slice(0,4))
        })
    },[api])
    function del(id){
            axios.delete('http://localhost:3000/user/'+id).then(()=>navigate('/'))
    }
  return (
    <div>
     <table border={1}>
        <caption><strong>CRUD OPERATION</strong>
       {/* <span><button onClick={()=>navigate('/add')}>ADD+</button></span> */}
     <Link to="/add">  <span><button>ADD+</button></span></Link>
        </caption>
        
        <thead>
            <tr>
                {thead.map ((x,index)=><th key={index}>{x}</th>)}
                <th colSpan={2}>Operations</th>
            </tr>
        </thead>
        <tbody>
            {api.map((x,index)=>{return(
                <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.username}</td>
                    <td>{x.email}</td>
                    <td><Link to={`/edit/:${x.id}`}><button>EDIT</button></Link>
                    <button onClick={()=>del(x.id)}>Delete</button></td>
                </tr>
            )})}
        </tbody>
     </table>
    </div>
  )
}
export default GetUsers
