import { Link } from 'react-router-dom'
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">LocalLens</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/budget" className="hover:text-blue-200">Budget</Link>
          <Link to="/emergency" className="hover:text-blue-200">Emergency</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
