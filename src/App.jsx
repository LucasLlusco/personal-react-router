import { useState } from 'react'
import './App.css'
import Route from './components/Route'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import Routes from './components/Routes'
import useNavigate from './hooks/useNavigate'
import Navigate from './components/Navigate'
import ProfilePage from './pages/ProfilePage'
import Navlink from './components/Navlink'

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  
  const onLogin = () => {
    setUser(true)
    navigate("/profile=papu")
  }

  const onLogout = () => {
    setUser(false);
  }

  return (
    <>
    <header>
      <nav>
        <Navlink to={"/"}>Home</Navlink>
        <Navlink to={"/blog"}>Blog</Navlink>
        <Navlink to={"/users"}>Users</Navlink>
        {user && <Navlink to={"/profile=papu"}>Profile</Navlink>}
        {user ? <button onClick={onLogout}>Logout</button> : <button onClick={onLogin}>Login</button>} 
      </nav>
    </header>
    



    <Routes>
      <Route path={"/"} component={<HomePage/>} />
      <Route path={"/blog"} component={<BlogPage/>} /> 
      <Route path={"/profile=username"} component={user ? <ProfilePage /> : <Navigate to={"/"} />} />
      <Route path={"*"}> 
        <p>Not found page.</p>
      </Route>
    </Routes>
    </>
  )
}

export default App