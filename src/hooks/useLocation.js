import React from 'react'

const useLocation = () => {
  
  const location = {
    pathname: window.location.pathname,
    hash: window.location.hash,
    params: window.history.state?.slug,
  }

  return location
}

export default useLocation