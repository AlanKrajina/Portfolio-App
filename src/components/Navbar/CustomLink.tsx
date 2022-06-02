import { NavLink } from "react-router-dom";

interface RouteProps {
    to: string;
    children: string;
}

const CustomLink: React.FC<RouteProps> = ({
        to,
        children
    }) => {

    let activeStyle1 = {
        textDecoration: "underline",
    };

    let activeStyle2 = {
        textDecoration: "none",
    };
    
    return (
        <NavLink 
        to={to} 
        style={({ isActive }) =>
            isActive ? activeStyle1 : activeStyle2
        }
        >
            {children}
        </NavLink>
    )
  }

export default CustomLink;
