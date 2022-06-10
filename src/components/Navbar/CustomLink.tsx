import { NavLink } from "react-router-dom";

interface RouteProps {
    to: string;
    children: string;
}

const CustomLink: React.FC<RouteProps> = ({
        to,
        children
    }) => {

    let linkStyle = {
        textDecoration: 'none',
        padding: '5px 0 5px 0'
    };
    
    return (
        <NavLink 
        to={to} 
        style={({ isActive }) =>
            isActive ? {...linkStyle, color: "#08fdd8"} : {...linkStyle, color: "#909096"}
        }
        >
            {children}
        </NavLink>
    )
  }

export default CustomLink;
