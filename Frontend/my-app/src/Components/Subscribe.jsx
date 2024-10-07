import React from 'react'

function Subscribe() {
    const data=JSON.parse(localStorage.getItem("Stock"))
    // console.log(data)
    if(data==null)return <div><h1>No Stocks Subscribed</h1></div>
  return (
    <div>
     
       {
       data!=null &&(
        data.map((data)=>(  <div className="stocktitle">
          <div>
          <h2>Stock Information for {data["2. Symbol"]}</h2>
          </div>
          <div>
          <p><strong>Last Refreshed:</strong> {data["3. Last Refreshed"]}</p>
          </div>
          <div>
          <p><strong>Time Zone:</strong> {data["5. Time Zone"]}</p>
          </div>
          </div>))
       
    
   
            
     
       
     
       )}
    </div>
  )
}

export default Subscribe
