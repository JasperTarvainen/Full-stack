import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import { FaUser, FaSignInAlt, FaSignOutAlt, FaStore, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

function Header() {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
    }
  return (
    <header className='header'>
        <div className='navbar-container'>
            <Link to="/" className='logo'>
            <FaStore className="icon" /> Market
            </Link>
            <ul className='nav-links'>
                {!user && (
                    <>
                    <li>
                        <Link to="/login">
                        <FaSignInAlt  className="icon" /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                        <FaUser className="icon" /> Register
                        </Link>
                    </li>
                    </>
                )}
                {user && (
                    <>
                    <li>
                        <Link to="/balance">
                        {user?.balance?.toFixed(2) || "0,00"} €
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                        <FaShoppingCart />
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                        <FaUser className='icon' /> {user.name || 'Profile'}
                        </Link>
                    </li>
                    </>
                )}    
            </ul>
        </div>
    </header>
  )
}

export default Header
