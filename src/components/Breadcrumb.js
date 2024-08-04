import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Breadcrumb = () => {
    const {pathname} = useLocation();
    let breadcrumb = pathname.split('/').filter((path) => path !== "" )
    let breadcrumbPath = "";

  return (
    <div className='breadcrumb'>
        <Link to={"/"}>Home</Link>
        {breadcrumb?.map((res, index) => {
            breadcrumbPath += `/${res}`;
            const isLast = index === breadcrumb.length - 1; 
            
            return (
                isLast ? (<span key={breadcrumbPath}> {">" + res} </span>) : 
                (<span key={breadcrumbPath}>{">"}<Link to={breadcrumbPath}> {res}</Link></span>)
            )  
        })}
    </div>
  )
}

export default Breadcrumb