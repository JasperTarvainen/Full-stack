import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {reset} from '../features/auth/authSlice'
import Spinner from '../components/spinner'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }
    if(!isLoading && user === null) {
      navigate('/login')
      return
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }

  return (
  <>  
    <section className="heading">
      <h1>Welcome {user.name}</h1>
    </section>
  </>  

  )
}

export default Home