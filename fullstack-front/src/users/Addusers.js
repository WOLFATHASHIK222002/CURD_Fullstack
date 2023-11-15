import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Addusers(){
    let navigate=useNavigate()
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const {name,username,email}=user
    const onInputchange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onsubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/");
    }
    return(
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>
            <form onSubmit={(e)=>onsubmit(e)}>
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input type={"text"} value={name} name="name"onChange={(e)=>onInputchange(e)} className="form-control"placeholder="Enter your Name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="UserName" className="form-label">UserName</label>
                <input type={"text"} value={username} name="username" onChange={(e)=>onInputchange(e)} className="form-control"placeholder="Enter your UserName"/>
            </div>
            <div className="mb-3">
                <label htmlFor="E-mail" className="form-label">E-mail</label>
                <input type={"text"} value={email}  name="email" onChange={(e)=>onInputchange(e)} className="form-control"placeholder="Enter your E-mail"/>
            </div>
            <button type="submit" className="btn btn-outline-warning">Submit</button>
            <Link to={"/"} className="btn btn-outline-danger mx-2">Cancel</Link>
            </form>

        </div>

        </div>
    </div>
    )
}
    

