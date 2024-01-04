import { useEffect, useState } from 'react'
import './App.css'
import PrintUser from './Components/PrintUser'
import Loading from './Components/Loading'

function App() {
  const [user, setUser] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchData = async () => {
    const resp = await fetch('https://api.github.com/users/dkoncius')
    const data = await resp.json()
    setUser(data)
    console.log(data)
  }

  useEffect(() =>{
    fetchData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 1500)
  }, [user])



  return (
    <>
      {isLoaded && user ? 
      <PrintUser user={user}/> :
      <Loading/>
    }
    </>
  )
}

export default App
