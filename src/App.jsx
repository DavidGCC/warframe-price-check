import { PureComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import PriceCheck from "./components/PriceCheck";
import TopSelling from "./components/TopSelling";

// STYLES
import "./styles/main.scss";

class App extends PureComponent {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/pricecheck" component={PriceCheck} />
                    <Route path="/topselling" component={TopSelling} />
                </Switch>
            </Router>
        );
    }
}

export default App;