import { useState , useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { login, logout } from './store/authSlice'
import authService from './appwrite/Auth'
import {Header , Footer} from './components/index'
import './App.css'

function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() =>{
    authService.getCurrent()
    .then((userData) =>{

      if (userData) {
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }

    })
    .finally(() => setLoading(false))
  } , [] )

  return (!loading) ? <div>
    <Header />
    logout
    <Footer/>
  </div> : null
}

export default App
