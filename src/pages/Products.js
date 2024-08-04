import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((resp) => resp.json())
        .then(data => setProducts(data.products));
    }, [])

  return (
    <div className='products_list'>
        {products?.map((prod, index) => {
            return (
                <div key={index} className='product_card'>
                    <Link to={`/products/${prod.id}`}>
                        <img src={prod.thumbnail} alt='prod_image'></img>
                        <p>{prod.title}</p>
                    </Link>
                </div>
            )
        })}

    </div>
  )
}

export default Products