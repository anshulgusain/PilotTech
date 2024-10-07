import React from 'react'

function Subscribe() {
    const stocks=JSON.parse(localStorage.getItem("stock"))
  return (
    <div>
      <div className="subscribeContainer">
       {
        stocks.map((ele)=>{
            <div className="stockParent">
            <h1>{ ele.symbol}</h1>  
            </div>
        })
       }
      </div>
    </div>
  )
}

export default Subscribe
