import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const ProductDesc = () => {

    // const product = useSelector(state=>state?.pro.singleSlice)
    const product = useLocation()
    console.log(product);
  return (
    <div>
        <h1>Product Description</h1>
      {product.state?.images?.map(x=>(
        <img src={x} alt="img" style={{height:'150px',width:"150px"}}/>
         ))}

      <h3>{product.state.brand}</h3>
      <h4>{product.state.title}</h4>
      <h2>{product.state.description}</h2>
      

    </div>
  )
}

export default ProductDesc
