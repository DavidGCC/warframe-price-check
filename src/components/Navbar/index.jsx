import { PureComponent } from "react";
import { Link } from "react-router-dom";


class Navbar extends PureComponent {
    render() {
        return (
            <div className="Navbar">
                <ul className="Navbar__list">
                    <li className="Navbar__item">
                        <Link to="/pricecheck">Price Check</Link>
                    </li>
                    <li className="Navbar__item">
                        <Link to="/topselling">Top Selling</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;