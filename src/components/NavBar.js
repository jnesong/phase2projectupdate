
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/pathophysiology"> pathophysiology </NavLink>
            <NavLink to="/history"> history </NavLink>
            <NavLink exact to="/"> results </NavLink>
        </nav>
    );
}

export default NavBar;
