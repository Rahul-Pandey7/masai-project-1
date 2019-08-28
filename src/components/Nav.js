import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';
import {setLogoutInfoInLocalStorage} from '../commons';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            collections: [],
            err:null,
        }
    }
    logout = (response) => {
        setLogoutInfoInLocalStorage();
        console.log(response);
    }
    failureResponseGoogle=(response) => {
        this.setState({
            err:response.error,
        })
    }


    get_video = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }
    componentDidMount(){
        this.setState({
            email:this.props.email
        })
    }

    render() {
        const name= localStorage.getItem('user_name');
        const image= localStorage.getItem('user_image');
        return (
            <div>
                <div class="container">
                    <nav className="navbar navbar-expand-lg fixed-top border-bottom border-success" style={{ backgroundColor: "#290330" }}>
                        <a className="navbar-brand logo_h" href="/userinterface"><img src="ourtube-white.svg" style={{ width: "125px", height: "40px;" }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form class="form-inline my-2 my-lg-0 ml-auto">
                                <input class="form-control mr-sm-2"
                                    style={{ width: "325px" }} type="search"
                                    placeholder="Search videos.." aria-label="Search"
                                    value={this.state.keyword}
                                    onChange={this.get_video} />
                                <Link to={`/search/strict/${this.state.keyword}`}><button class="btn btn-outline-success my-2 my-sm-0"
                                    type="submit"
                                // onClick={() => this.props.history.push(`/a/strict/${this.state.keyword}`)}>
                                ><i class="fa fa-search"></i></button></Link>
                            </form>
                            <ul className="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" style={{ color: "#FBFBFB" }}>
                                       <img style={{borderRadius:"50%", height:"50px"}} src= {image}/></a>
                                    <div class="dropdown-menu">
                                        <Link to= "/subscription" class="dropdown-item bg-dark mt-n2"style={{ color: "#FBFBFB" }} href="#one">Subscription</Link>
                                        <Link to="/channel" class="dropdown-item bg-dark"style={{ color: "#FBFBFB" }} href="#two">My Channels</Link>
                                        {/* <a class="dropdown-item bg-dark"style={{ color: "#FBFBFB" }} href="#three">three</a> */}
                                    </div>
                                </li>
                                <li className="nav-item active nav-link text-dark mt-n2"><Link to="/" className="nav-link" style={{ color: "#FBFBFB" }}>
                                    <GoogleLogout
                                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                        buttonText="Logout"
                                        onLogoutSuccess={this.logout}
                                        onFailure={this.failureResponseGoogle}>
                                    </GoogleLogout>
                                    {this.state.err && <div></div>}
                                </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="mt-4"></div>
            </div>
        );
    }
}