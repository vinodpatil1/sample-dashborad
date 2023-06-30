import React from 'react'

const Cards = (props) => {
  return (
    <>
        
             <div className="col-12 col-md-3">
                    <div className="card mb-3">
                    <div className="card-body">
                    <div className="card-header">
                        <span className='card-title'>{props.ctitle}</span>
                        <span><a href='#'><i className="bi bi-three-dots"></i></a></span>
                   </div>
                    <h3 className="card-text">{props.ccontent}</h3>
                    <p>{props.ctext}</p>
                    </div>
                    </div>
               </div>

               
    </>
  )
}

export default Cards;
