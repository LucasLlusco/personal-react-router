import React from 'react'
import useLocation from '../hooks/useLocation'

const BlogPage = () => {
  const location = useLocation();
  
  return (
    <section className='content'>
      <h2 className="title">BlogPage</h2>
      <div>useLocation: 
        <p>pathname: {location.pathname}</p>
        <p>hash: {location.hash}</p>
        <p>params: {location.params}</p>
      </div>  
    </section>
  )
}

export default BlogPage