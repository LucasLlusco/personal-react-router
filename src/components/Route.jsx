import React, { useEffect } from 'react'

const Route = ({path, component, children, currentPath, saveRoute }) => {
  const renderPage = component || children;

  const [pathname, slug ] = path.split('='); 
  let newRoute;
  let formattedPath;
 
  if(path === "/") { 
    formattedPath = "/"
    newRoute = {
      pathname: formattedPath,
      slug: ""
    }
  } else {
    formattedPath = pathname;
    formattedPath = slug ? formattedPath + "=" : formattedPath;

    newRoute = {
      pathname: formattedPath,
      slug: slug ? slug : "" 
    }
  }

  const handleSaveRoute = () => {
    saveRoute(newRoute)
  }

  useEffect(() => {
    handleSaveRoute()
  }, [])
  
  return (
    <>
    {currentPath.pathname === formattedPath && renderPage}
    {currentPath.pathname !== formattedPath && path === "*" && !currentPath.exist && renderPage} 
    </>
  )
}

export default Route


