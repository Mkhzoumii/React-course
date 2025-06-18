import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetils() {
  const {id}=useParams();
  return (
    <div className='text-white'>
      ProductDetils
      <p>Id = {id} </p>
    </div>
  )
}

export default ProductDetils
