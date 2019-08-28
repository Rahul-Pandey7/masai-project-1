import React from "react";
import ReactDOM from "react-dom";
import UserInterface from "./UserInterface";
import Search from "./Search.js";
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Trending from "./Trending";
import Music from "./Music";
import Gaming from "./Gaming";
import Science from "./Science";
import Kannada from "./Kannada";
import Hindi from "./Hindi";
import Punjabi from "./Punjabi";
import English from "./English";
import Religious from "./Religious";
import Subscription from "./Subscription";
import YourChannel from "./YourChannel";
import Sports from "./Sports";
import Nav from "./Nav";
import {checkIsAuthenticated} from "../commons/index.js";

const PrivateRoute= ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) =>(
        checkIsAuthenticated()===true
        ? <Component {...props}/>
        : <Redirect to="/userinterface"/>
    )}/>
)

const LoggedInRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		checkIsAuthenticated() === false
			? <Component {...props} />
			: <Redirect to='/login' />
	)} />
  )

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                        <switch>
                            {/* <Route path ="/nav" component={Nav}/> */}
                            <Route path="/" exact component={Login}/>
                            <Route path="/userinterface" component={UserInterface}/>
                            <Route path="/search/:id/:name" component={Search}/>
                            <Route path="/trending/:id" component={Trending}/>
                            <Route path="/music/:10" component={Music}/>
                            <Route path="/gaming/:20" component={Gaming}/>
                            <Route path="/science/:28" component={Science}/>
                            <Route path="/kannada/:cwEPvbYIT4M" component={Kannada}/>
                            <Route path="/hindi/6wNFJIbTxNk" component={Hindi}/>
                            <Route path="/punjabi/:Kd57YHWqr" component={Punjabi}/>
                            <Route path="/english/:PT2_F-1esPk" component={English}/>
                            <Route path="/religious/Y8e8qcbWzJY" component={Religious}/>
                            <Route path="/subscription" component={Subscription}/>
                            <Route path="/channel" component={YourChannel}/>
                            <Route path="/sports/23" component={Sports}/>
                    </switch>
                </div>
            </Router>
        );
    }
}