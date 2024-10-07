
import "../Styles/Login.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 const [error, setError] = useState(null);


 const fetchData=async()=>{
 if(email==="admin@gmail.com"&&password==="admin1234"){
    navigate("/admin")
 }else{
    alert("Wrong Credentials")
 }
}


const HandleSubmit=()=>{
  
    fetchData()

}



  return (
    <div className="parent">
      <div className="header">
        <div className="text">AdminLogin </div>
        <div className="underline"> </div>
      </div>
      <div className="inputs">
        <div className="input">
         
          <input type="email" placeholder="Username" onChange={((e)=>{
            setEmail(e.target.value)
          })} />
        </div>
        <div className="input">
       
          <input type="password"  placeholder="Password" onChange={((e)=>{
            setPassword(e.target.value)
          })} />
        </div>
        <div className="submit_container">
          <div className="submit" onClick={HandleSubmit}>Login</div>
          {/* <div className="submit">Sign-Up</div> */}
        </div>
      
      </div>
 



    </div>
   
    )
}

export default AdminLogin