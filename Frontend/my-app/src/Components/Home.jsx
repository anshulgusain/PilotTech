
import axios from "axios"
import { useEffect, useState } from "react"
import "../Styles/Home.css"
import {useNavigate} from "react-router-dom"




function Home() {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search,setSearch]=useState("")
  const navigate=useNavigate()



const handleSubmit=async(e)=>{
  e.preventDefault();
   
        try {
          
          const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${search}&apikey=demo`)
          // console.log(response.data["Meta Data"]["2. Symbol"])
         const meta=response.data
          setData(meta) 
          setLoading(false)
          console.log(data)
        } catch (err) {
          setError(true)
          console.log(err)
        }
  
    
    
}



   



//   if(loading) return <div>Loading ........</div>
  if(error) return <div className="error"><h1>Please Login First</h1></div>

  return (
    <div className="stockparent">
    <input placeholder="Search Your Stock here" className="stockSearch" onChange={((e)=>setSearch(e.target.value))}></input>
    <button onClick={handleSubmit} className="stockButton">Submit</button>
  {
    data ||data.length>0 && (
      <div className="stockContainer">
      {
          data.map((ele)=>(
              <div className="stocktitle">
               <div>
               <h2>Stock Information for {ele["Meta Data"]["2. Symbol"]}</h2>
               </div>
               <div>
               <p><strong>Last Refreshed:</strong> {ele["Meta Data"]["3. Last Refreshed"]}</p>
               </div>
               <div>
               <p><strong>Time Zone:</strong> {ele["Meta Data"]["5. Time Zone"]}</p>
               </div>
          
         
                  <div>
                      <button className="subscribe" onClick={(()=>{
                          localStorage.setItem("Stock",JSON.stringify(ele))
                      })}>Subscribe</button>
                  </div>
              
            </div>
          
          ))
      }
  </div>
    )
       
    
  }
    </div>
  )
}

export default Home