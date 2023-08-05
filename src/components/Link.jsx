import React from 'react'
import useNavigate from '../hooks/useNavigate'

const Link = ({to, children}) => {
  const navigate = useNavigate()

  return (
    <a onClick={() => navigate(to)}>
      {children}
    </a>
  )
}

export default Link