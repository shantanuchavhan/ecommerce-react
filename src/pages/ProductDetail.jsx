import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const ProductDetail = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState("");
    useEffect(()=>{
        const fetchData=async()=>{
            const responce=await fetch(`http://127.0.0.1:8000/api/cloth_products/${id}/`)
            const data = await responce.json();
            setProductDetails((old) => data);
        }
        
    },[id])

    
  return (
    <div>
      <h2>Product Detail Page</h2>
      <p>Product ID: {id}</p>
    </div>
  )
}

export default ProductDetail