import React from 'react'
import useParams from '../hooks/useParams'
import useLocation from '../hooks/useLocation';

const ProfilePage = () => {
  const { username } = useParams();
  const location = useLocation();
  
  return (
    <section className='content'>
      <h2 className='title'>perfil de ... {username}</h2>
      <div>useLocation: 
        <p>pathname: {location.pathname}</p>
        <p>hash: {location.hash}</p>
        <p>params: {location.params}</p>
      </div>  
    </section>
  )
}

export default ProfilePage