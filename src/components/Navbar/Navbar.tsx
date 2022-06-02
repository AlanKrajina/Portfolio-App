import CustomLink from "./CustomLink"

const NavBar: React.FC = () => {
  return (
    <nav>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </nav>
  )
}
export default NavBar;