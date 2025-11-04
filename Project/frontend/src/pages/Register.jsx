import { useState, useEffect } from 'react'
import {FaUser} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/spinner'
import "./Register.css"

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    steamTradeLink: '',
  })

  const { name, email, password, password2, steamTradeLink } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
        steamTradeLink,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">
          <FaUser /> Register
        </h1>
        <p className="register-subtitle">Create an account</p>

        <form onSubmit={onSubmit} className="register-form">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            className="register-input"
            onChange={onChange}
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            className="register-input"
            onChange={onChange}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            className="register-input"
            onChange={onChange}
            required
          />
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder="Confirm your password"
            className="register-input"
            onChange={onChange}
            required
          />
          <button type="submit" className="register-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register