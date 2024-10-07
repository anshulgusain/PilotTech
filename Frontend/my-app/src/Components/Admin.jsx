import React, { useEffect, useState } from 'react'
import axios from "axios";
function Admin() {
   const [data,setData] =useState([])

    useEffect(() => {
    
        const search = async () => {
          try {
         
            const response = await axios.get("https://pilottech.onrender.com/user")
            
            setData(response.data)
           console.log(data)
          } catch (err) {
           
            console.log(err)
          }
    
        }
        search()
      },[])

  return (
    <div>
      <h1>Welcome Admin</h1>
       {
        data!=="undefined"&& (
        data.map((ele)=>(
         <div className="stockcontainer">
            <div className="stockname">
                {ele.name}
            </div>
             <div className="stockemail">
            {ele.email}
            <div className="stockmobile">
                {ele.mobile}
            </div>
         </div>
         </div>   
        
        ))
      )
       }
    </div>
  )
}

export default Admin
