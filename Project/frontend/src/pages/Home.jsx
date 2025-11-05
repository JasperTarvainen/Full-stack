import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {reset} from '../features/auth/authSlice'
import spinner from '../components/spinner'
import Banner from '../components/banner'
import Frontpagecontent from '../components/Frontpagecontent'
import Reviews from "../components/reviews"
import Footer from "../components/Footer"

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
      <Banner 
      title="Lorem ipsum"
      subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      button1
      button2
      />
    <Frontpagecontent />
    <Reviews />
    <Footer />
    </section>
  </>  

  )
}

export default Home