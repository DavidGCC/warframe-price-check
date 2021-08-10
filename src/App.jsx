import { PureComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import PriceCheck from "./routes/PriceCheck";
import TopSelling from "./routes/TopSelling";

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