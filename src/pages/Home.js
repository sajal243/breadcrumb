import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home_page'>
        <div className='view_all'>
            <Link to="/products"><button>View All Products</button></Link>
        </div>
    </div>
  )
}

export default Home