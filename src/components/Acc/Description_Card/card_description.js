import React from 'react'
import "./card_description.css";


function DescCard({data}){

    return(
        <div className="acc">
            {
              data.map((elem)=>{
                return (
                  <div key={elem.id} className={`accCard ${elem.clas}`}>
                    <h1>{elem.title}</h1>
                    <div className="photoWidth" src={elem.img} style={{backgroundImage: `url(${elem.img})`}}></div>
                    <p>{elem.desc}</p>
                  </div>
                )
              })
            }
                
        </div>
    )
}
export default DescCard;