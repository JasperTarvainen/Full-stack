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
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <spinner />
  }

  return (
  <>  
    <section className="heading">
      <h1></h1>
    </section>
  </>  

  )
}

export default Home