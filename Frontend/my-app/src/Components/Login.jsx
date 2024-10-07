
import "../Styles/Login.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 const [error, setError] = useState(null);


 const fetchData=async()=>{
  const userData = {
        email: email,
    password: password
  };

  try{
 const response= await axios.post("http://localhost:8080/login",userData)
 
 console.log("Login Successful:",response.data)
 console.log(response.data.token)
 const abc=""
 localStorage.setItem("token", abc)
 localStorage.setItem("token", response.data.token)

 alert(response.data.msg)
 if(response.data.msg==="Logged in Succesfully"){
  navigate("/home")
 }

  }catch(err){
    console.log(err)
    setError(error);
  }


}


const HandleSubmit=()=>{
  
    fetchData()

}



  return (
    <div className="parent">
      <div className="header">
        <div className="text">Login </div>
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
        <div className="signup" onClick={(()=>{
          navigate("/signup")
        })}>Click to Sign-Up</div>
      </div>
 



    </div>
   
    )
}

export default Login