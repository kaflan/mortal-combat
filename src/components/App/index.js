import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import McChooseHero from '../McChooseHero';
import McVsScreen from '../McVsScreen';
import GameOver from "../GameOver";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={McChooseHero} />
                    <Route path="/battle" component={McVsScreen} />
                    <Route path="/game-over" component={GameOver} />
                </Switch>
            </div>
        </Router>
    );
}

