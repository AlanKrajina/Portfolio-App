import CustomLink from "./CustomLink"
import './Navbar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </nav>
  )
}
export default NavBar;