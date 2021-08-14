import { PureComponent } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.styles.scss";

class Navbar extends PureComponent {
    render() {
        return (
            <div className="Navbar">
                <ul className="Navbar__list">
                    <NavLink to="/pricecheck" className="Navbar__item" activeClassName="Navbar__item--active">Price Check</NavLink>
                    <NavLink to="/topselling" className="Navbar__item" activeClassName="Navbar__item--active">Top Selling</NavLink>
                </ul>
            </div>
        );
    }
}

export default Navbar;