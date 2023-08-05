import React, { useEffect, useState } from 'react'

const Routes = ({children}) => {
  const [routes, setRoutes] = useState([]);
  const [currentPath, setCurrentPath] = useState({pathname: "", exist: false});

  const locationHandler = () => {
    let currentSlug = "";
    let currentPathname = window.location.hash.replace("#", "/") || window.location.hash === "" && "/";
    const routeExist = routes.find(route => route.pathname === currentPathname);
    let routeWithSlugExist;

    const routesWithSlug = routes.filter(route => route.slug !== "");

    if(routesWithSlug && !routeExist) { 
      const [name, _] = currentPathname.split('=');
      const route = routesWithSlug.find(route => route.pathname === name + "=")
      if(route) { 
        currentPathname = route.pathname
        currentSlug = route.slug
        routeWithSlugExist = true;
      }
    }

    if(routeExist || routeWithSlugExist) {
      setCurrentPath({pathname: currentPathname, slug:currentSlug, exist: true});
      history.pushState({pathname: currentPathname, slug:currentSlug, exist: true}, currentPathname)
    } else {
      setCurrentPath({pathname: currentPathname, slug:currentSlug, exist: false});
      history.pushState({pathname: currentPathname, slug:currentSlug, exist: false}, currentPathname)

    }
  }

  const saveRoute = (newRoute) => {
    const newRoutes = [...routes]; 
    newRoutes.push(newRoute);
    setRoutes(prevData => [...prevData, ...newRoutes]);
  }

  useEffect(() => {
    locationHandler()
    window.addEventListener('hashchange', locationHandler);
  }, [routes]) 



  return (
    <>
    {React.Children.toArray(children).map(child => React.cloneElement(child, {
      currentPath:currentPath, 
      saveRoute:saveRoute, 
    }
    ))}
    </>
  )
}

export default Routes