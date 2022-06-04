import CustomLink from "./CustomLink"
import './Navbar.css';

const NavBar: React.FC = () => {
  return (
    <main className="navbar">
      <header>
        <img className="logo" src='/images/logo.jpg' alt="logo" />
        <p className="name">Alan</p>
        <span className="title">Frontend Developer</span>
      </header>
      <nav>
        <hr/>
        <CustomLink to="/">Home</CustomLink>
        <hr/>
        <CustomLink to="/about">About</CustomLink>  
        <hr/>      
      </nav>
      <footer>
        <img className="footerIcons"src='/images/linkedin.svg' alt="linkedin"/>
      </footer>
    </main>
  )
}
export default NavBar;