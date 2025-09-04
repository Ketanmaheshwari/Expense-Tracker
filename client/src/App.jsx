

import './App.css'
import { Routes,Link, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
return (
  <div>
    <nav className='p-4 bg-gray-800 text-white flex justify-end'>
      <div class="flex space-x-4">
      <Link to="/login" className= "px-2">Login</Link>
      <Link to="/signup" className="px-2">Sign Up</Link>
      </div>
    </nav>
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
  </Routes>
  </div>
  
)
}

export default App;
