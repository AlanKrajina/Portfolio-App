import { NavLink } from "react-router-dom";

interface RouteProps {
    to: string;
    children: string;
}

const CustomLink: React.FC<RouteProps> = ({
        to,
        children
    }) => {

    let activeStyle = {
        textDecoration: "none",
        color: "#08fdd8"
    };

    let nonactiveStyle = {
        textDecoration: "none",
        color: "#909096"
    };
    
    return (
        <NavLink 
        to={to} 
        style={({ isActive }) =>
            isActive ? activeStyle : nonactiveStyle
        }
        >
            {children}
        </NavLink>
    )
  }

export default CustomLink;
