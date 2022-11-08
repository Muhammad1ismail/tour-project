import React, { useState } from 'react'



const Tour = (props) => {

  const [readMore,setReadMore] = useState(false);


    const {id,name,price,info,image,removeTour} = props;
   
  return (
    <article>
        <img className='tourImage' src={image} />
        <div className='detail'>
          <h3>{name}</h3>
          <p className='price'>{price}</p>
        </div>
        
        <p className='info'>
          {readMore ? info : `${info.substring(0,150)}...`}
          <button className='show'  onClick={()=>{setReadMore(!readMore)}}>
          {readMore ? "show less" : "show more"}</button>
        </p>
      
        <button className='not-interested' onClick={()=>{removeTour(id)}}>Not Interested</button>
    </article>
  )
}

export default Tour