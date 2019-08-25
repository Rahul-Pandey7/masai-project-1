import React from "react";
import {Link} from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <h1 className="display-4">My Youtube Channel</h1>
                <div class="container">
                    <nav className="navbar navbar-expand-lg fixed-top color-blue bg-dark">
                        <Link to = "userinterface" className="navbar-brand logo_h"><img src="download.png" style={{ width: "85px", height: "85px;" }} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto color-blue">
                                <li className="nav-item active color-blue nav-link color-blue mt-n2"><Link to ="/search" className="nav-link color-blue">Search</Link>
                                </li>
                                <li><i className="fa fa-bells"></i></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Categories
                                    </a>
                                    <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                        <Link to ="/trending" class="dropdown-item bg-dark"style={{color:"white"}}>Most Popular</Link>
                                        <Link to = "/music" class="dropdown-item bg-dark"style={{color:"white"}}>Trending Music Videos</Link>
                                        <Link to ="/gaming" class="dropdown-item bg-dark"style={{color:"white"}}>Trending Gaming Videos</Link>
                                        <Link to ="/science" class="dropdown-item bg-dark"style={{color:"white"}} >Trending Science & Technology</Link>
                                        {/* <a class="dropdown-item" href="#">Sufi</a> */}
                                        <div class="dropdown-divider"></div>
                                    </div>
                                </li>
                                {/* <a class="dropdown-item" href="#">Something else here</a> */}
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Regional Language
                                            </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to = "/hindi" class="dropdown-item bg-dark"style={{color:"white"}}>Hindi</Link>
                                        <Link to = "/punjabi" class="dropdown-item bg-dark"style={{color:"white"}}>Punjabi</Link>
                                        <Link to = "/kannada" class="dropdown-item bg-dark"style={{color:"white"}}>Kannada</Link>
                                        <Link to = "english" class="dropdown-item bg-dark"style={{color:"white"}}>English</Link>
                                        <Link to = "religious" class="dropdown-item bg-dark"style={{color:"white"}} href="http://localhost:3000/religious">Bhakti</Link>                   
                                    </div>
                                </li>
                                <li className="nav-item "><Link to = "/" className="nav-link color-blue border border-success" href="http://localhost:3000/">Log Out</Link></li>
                            </ul>

                        </div>
                    </nav>
                </div>
                <div className="mt-4"></div>
            </div>
                );
            }
}