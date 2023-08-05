import React from 'react'
import useNavigate from '../hooks/useNavigate'

const Navigate = ({to}) => { 
  const navigate = useNavigate();
  
  return (
    navigate(to)
  )
}

export default Navigate