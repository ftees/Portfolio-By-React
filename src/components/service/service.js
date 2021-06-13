import React from 'react'
import "./service.css"
const service = (props) => {
   
    return (
        <div className="service">
            <div className="format-div">
           <h2>Service</h2>
            <div className="listContent">
                
            <div class="card">
                <img class="card-img-top" src="card1.png" alt="Card image cap"/>
                <div class="card-body">
                    <p class="card-text">Android Programming</p>
                  </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="card2.png" alt="Card image cap"/>
                <div class="card-body">
                    <p class="card-text">Desktop Application Programming</p>
                  </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="card3.png" alt="Card image cap"/>
                <div class="card-body">
                    <p class="card-text">Website Programming</p>
                  </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default service
