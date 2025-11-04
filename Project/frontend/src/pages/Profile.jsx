import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logout, reset} from '../features/auth/authSlice'

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
        <section className='profile'>
           <h1 className='text-xl font-semibold mb-4'>Your Profile</h1>
           <div className='profile-info'>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Steam Trade Link:</strong> {user?.steamTradeLink}</p>
           </div>
           <button onClick={onLogout} className='btn btn-danger mt-4'>
        Logout
      </button>
    </section> 
    )
}
export default Profile