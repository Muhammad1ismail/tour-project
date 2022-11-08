import React from 'react'

import Tour from './Tour';

const Tours = ({tours,removeTour}) => {
    
    const {id,name,price,info,age} = tours;
    
  return (
    <>

        {tours.map((tour,id) => <Tour key={id} {...tour} removeTour={removeTour} /> )}

    </>
  )
}

export default Tours;