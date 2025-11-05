import './content.css' 
import {FaFacebookF, FaInstagram, FaLinkedinIn,} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-links'>
                    <a href='#top'>Home</a>
                    <a href='#features'>Features</a>
                    <a href='#about'>about</a>
                    <a href='#contact'>Contact</a>
                    <Link to='/profile'>Profile</Link>
                </div>
                <div className='footer-socials'>
                    <div className='social-icon'><FaFacebookF /></div>
                    <div className='social-icon'><FaInstagram /></div>
                    <div className='social-icon'><FaLinkedinIn /></div>
                </div>
            </div>
        </footer>
    )
}
export default Footer