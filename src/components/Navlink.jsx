import React, { useEffect, useState } from 'react'
import useNavigate from '../hooks/useNavigate'

const Navlink = ({to, children}) => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false);


  const navlinkHandler = () => {
    let currentPathname = window.location.hash.replace("#", "/");
    if(!currentPathname) {
      currentPathname = "/" 
    }
    setIsActive(to === currentPathname ? true : false);
  }

  useEffect(() => {
    navlinkHandler()
    window.addEventListener('hashchange', navlinkHandler);
  }, [])

  return (
    <a onClick={() => navigate(to)} className={`${isActive ? "active" : ""} link`} >
      {children}
    </a>  )
}

export default Navlink
