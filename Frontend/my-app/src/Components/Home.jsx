
import axios from "axios"
import { useEffect, useState } from "react"
import "../Styles/Home.css"
import {useNavigate} from "react-router-dom"




function Home() {
  
  const [data, setData] = useState({})
  var [arr,setArr]=useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [search,setSearch]=useState("")
  const navigate=useNavigate()



const handleSubmit=async(e)=>{
  e.preventDefault();
  setLoading(false)
   
        try {
          
          const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${search}&apikey=NJSHXVH3JPVUQVSO`)
          // console.log(response.data["Meta Data"]["2. Symbol"])
         const meta=response.data["Meta Data"]
      
         setData(meta)
         setLoading(true)
          console.log(data)
        } catch (err) {
          setError(true)
          setLoading(false)
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
   loading &&(
      <div className="stockContainer">
      {
          
              <div className="stocktitle">
               <div>
               <h2>Stock Information for {data["2. Symbol"]}</h2>
               </div>
               <div>
               <p><strong>Last Refreshed:</strong> {data["3. Last Refreshed"]}</p>
               </div>
               <div>
               <p><strong>Time Zone:</strong> {data["4. Time Zone"]}</p>
               </div>
          
         
                  <div>
                      <button className="subscribe" onClick={(()=>{
                         const newArr= arr.push(data)
                          localStorage.setItem("Stock",JSON.stringify(arr))
                      })}>Subscribe</button>
                  </div>
              
            </div>
          
         
      }
      
  
  </div>
   )
}
    
       
    
  
    </div>
  )
}

export default Home