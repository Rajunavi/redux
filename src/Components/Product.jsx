import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
// import productAction from '../Store/Action/ProductAction'
import { useNavigate, useNavigation } from 'react-router-dom'
import getProduct from '../Redux/productSlice/productAction'
import { useEffect } from 'react'
import { fetchData } from '../Redux/productSlice'
// import { clicked_product } from '../Redux/productSlice'

const Product = () => {

    // const arr = useFetch()
    const arr = useSelector(state=>state.pro.singleSlice)
     
    const nav = useNavigate();


    const dispatch = useDispatch(); 
    const handler = (parm) => {
        
        // dispatch(clicked_product(parm))
        nav('/productDesc', {state:parm})
    }
  useEffect(() => {
    dispatch(fetchData())
    
  }, [])
  

  return (
    <div>
     {arr?.products?.map(x=>(
        <button onClick={()=>handler(x)}>
        <img src={x.thumbnail} alt="img" style={{height:'250px', width:'200px'}}/>
        <h3>{x.title}</h3>
        <h4>{x.price}</h4>

        </button>
     ))}
    </div>
  )
}

export default Product
