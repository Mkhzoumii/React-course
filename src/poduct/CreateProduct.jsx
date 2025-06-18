import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {
  const navigat = useNavigate();
  return (
    <div className='text-white'>
      <button onClick={()=>navigat(-2)}> back to product bage </button>
    </div>
  )
}

export default CreateProduct
