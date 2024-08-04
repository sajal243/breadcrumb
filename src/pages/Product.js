import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
    const [productDetails , setProductDetails] = useState();
    const {id} = useParams();

    useEffect(() => {
        fetch("https://dummyjson.com/products/" + id)
        .then((resp) => resp.json())
        .then((data) => setProductDetails(data))

    }, [id])
  return (
    <div className='product'>
        <h1>Product Detail Page</h1>
        {productDetails ? 
        <div>
            <img src={productDetails.thumbnail} alt="Product" />
            <h3>{productDetails.title}</h3>
            <h3>{productDetails.price}</h3>
            <p>{productDetails.description}</p>
        </div> : <p>Loading....</p>}

    </div>
  )
}

export default Product