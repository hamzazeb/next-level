import React, { useState } from "react";

export default function Welcomefun(props) {
    const [name,setName] = useState("")
    return <div>
        <h1>Hello, {props.name} {name}</h1>
        <input type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)} 
        ></input>
    </div>
  }