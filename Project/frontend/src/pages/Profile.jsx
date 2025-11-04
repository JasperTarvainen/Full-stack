import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logout, reset} from '../features/auth/authSlice'
import "./Login.css"

function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login');
    }

    return (
        <div className='login-container'>
        <div className='login-card'>  
        <h1 className='login-title'>Your Profile</h1>
           <div className='profile-info'>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
           </div>
        <button type="submit" onClick={onLogout} className='login-button'>Logout</button>
        </div>
        </div>  

    )
}
export default Profile