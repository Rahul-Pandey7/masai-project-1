import React from "react"
import UserInterface from "./UserInterface";
import Search from "./Search";
import Login from "./Login";
import Nav from "./Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Trending from "./Trending";
import Music from "./Music";
import Gaming from "./Gaming";
import Science from "./Science";
import Kannada from "./Kannada";
import Hindi from "./Hindi";
import Punjabi from "./Punjabi";
import English from "./English";
import Religious from "./Religious";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                        <switch>
                            <Route path="/" exact component={Login}/>
                            <Route path="/userinterface" component={UserInterface}/>
                            <Route path="/search" component={Search}/>
                            <Route path="/trending" component={Trending}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/gaming" component={Gaming}/>
                            <Route path="/science" component={Science}/>
                            <Route path="/kannada" component={Kannada}/>
                            <Route path="/hindi" component={Hindi}/>
                            <Route path="/punjabi" component={Punjabi}/>
                            <Route path="/english" component={English}/>
                            <Route path="/religious" component={Religious}/>
                    </switch>
                </div>
            </Router>
        );
    }
}