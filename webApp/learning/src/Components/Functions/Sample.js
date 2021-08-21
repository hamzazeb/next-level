import React, { useEffect, useState } from "react";
import {profileData} from '../APIs/API'

export default function Welcomefun(props) {
    const [name,setName] = useState("")

    const myData = () =>{
        profileData().then((result) => {
            console.log("myData is ", result);
          });
    }

    useEffect(()=>{
        myData();
    });
    return <div>
        <h1>Hello, {props.name} {name}</h1>
        <input type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)} 
        ></input>
    </div>
  }