import React from 'react'
import useNavigate from '../hooks/useNavigate';
import Navlink from '../components/Navlink';
import Link from '../components/Link';
import useLocation from '../hooks/useLocation';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    navigate("/blog")
  }

  return (
    <section className='content'>
      <h2 className='title'>HomePage</h2>
      <div className='div-column'>
        <span>useNavigate : <button onClick={() => navigate("/blog")}>Blog</button></span>
        <span>handleNavigate : <button onClick={handleNavigate}>Blog</button></span>
        <span>link: <Link to={"/blog"}>Blog</Link></span>
        <span>navlink: <Navlink to={"/blog"}>Blog</Navlink></span>
        <hr />
        <div>useLocation: 
          <p>pathname: {location.pathname}</p>
          <p>hash: {location.hash}</p>
          <p>params: {location.params}</p>
        </div>        
      </div>
    </section>
  )
}

export default HomePage