const Navbar = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    height: '100vh',
    position: 'fixed' as 'fixed',
    backgroundColor: '#151515',
    left: 0,
    width: '9rem',
    justifyContent: 'space-between',
    zIndex: 21
}
    
const Header = {
    height: '12.5rem',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    paddingTop: '1rem'
}

const Name = {
    fontSize: 'x-large',
    marginTop: '6.5rem',
    textAlign: 'center' as 'center'
}

const TitleDiv = {
    fontSize: 'x-large',
    marginTop: '0.5rem',
    marginBottom: '1rem'
}

const Title = {
    fontSize: 'small'
}

const Logo = {
    width: '6rem',
    marginTop: '1.5vh',
    marginLeft: '1.7vh'
}

const Nav = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    fontSize: 'larger',
    zIndex: 21,
    textAlign: 'center' as 'center'
}

const Footer = {
    height: '17vh',
    alignSelf: 'center'
}

const FooterIcons = {
    width: '25px',
    height: '25px',
    backgroundColor: 'white'
}

const Hr = {
    backgroundColor: '#383838',
    border: '0.1px solid #383838',
    width: '8rem'
}

const Wrap = {
    position: 'absolute' as 'absolute',
    left: 0,
    top: 0
}
    
export const styles = {
    Navbar: Navbar,
    Header: Header,
    Name: Name,
    TitleDiv: TitleDiv,
    Title: Title,
    Logo: Logo,
    Nav: Nav,
    Footer: Footer,
    FooterIcons: FooterIcons,
    Hr: Hr,
    Wrap: Wrap
}