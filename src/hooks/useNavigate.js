
import React from 'react'

const useNavigate = () => {

  const navigate = (path) => {
    if(path === "/") {
      location.hash = "" 
      history.pushState(null, null, ' '); 
    } else {
      location.hash = `#${path.replace("/", "")}`
    }
  }

  return (
    navigate
  )
}

export default useNavigate