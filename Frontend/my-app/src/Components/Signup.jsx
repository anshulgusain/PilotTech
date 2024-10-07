
import "../Styles/Signup.css"
import { useState,  } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Signup() {
  const navigate=useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")


  const [error, setError] = useState(null);

const fetchData=async()=>{
  const userData = {
    name: name,
    email: email,
    mobile:mobile,
    password: password
  };

  try{
 const response= await axios.post("http://localhost:8080/signup",userData)
 
 console.log("Signup Successful:",response.data)
 alert("Signed-Up Successfully")
 navigate("/")
  }catch(err){
    console.log(err)
    setError(error);
  }


}


const HandleSubmit=()=>{
  
    fetchData()

}



if (error) {
  return <p>Error: {error.message}</p>;
}

  return (
    <div className="parent">
      <div className="header">
        <div className="text">Signup</div>
        <div className="underline"> </div>
      </div>
      <div className="inputs">

        <div className="input">
          <input type="text" placeholder="Name" onChange={((e) => {
            setName(e.target.value)
          })} />
        </div>


        <div className="input">
          <input type="email" placeholder="email" onChange={((e) => {
            setEmail(e.target.value)
          })}
          />
        </div>


        <div className="input">
          <input type="Number" placeholder="Mobile Number" onChange={((e) => {
            setMobile(e.target.value)
          })} />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" onChange={((e) => {
            setPassword(e.target.value)
          })} />
        </div>



        <div className="submit_container">
          <div className="submit" onClick={HandleSubmit}>Register</div>
          {/* <div className="submit">Sign-Up</div> */}
        </div>

      </div>




    </div>

  )
}

export default Signup