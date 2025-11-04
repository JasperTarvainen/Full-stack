import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}


export default App;
