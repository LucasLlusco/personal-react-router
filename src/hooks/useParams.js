import React from 'react'

const useParams = () => {  
  let params;

  if(history.state?.exist && history.state?.slug) {
    const [_, param] = location.hash.split('=');
    const slug = history.state.slug;
    params = {}
    params[slug] = param; 
  } else {
    params = null;
  }
  
  return params
}

export default useParams
