import React from "react";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <h1 className="display-4">My Youtube Channel</h1>
                <div class="container">
                    <nav className="navbar navbar-expand-lg fixed-top color-blue bg-dark">
                        <a className="navbar-brand logo_h" href="http://localhost:3000/userinterface"><img src="download.png" style={{ width: "85px", height: "85px;" }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto color-blue">
                                <li className="nav-item active color-blue nav-link color-blue mt-n2"><a className="nav-link color-blue" href="http://localhost:3000/search">Search</a>
                                </li>
                                <li><i className="fa fa-bells"></i></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Categories
                                    </a>
                                    <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item bg-dark"style={{color:"white"}} href="http://localhost:3000/trending">Most Popular</a>
                                        <a class="dropdown-item bg-dark"style={{color:"white"}} href="http://localhost:3000/music">Trending Music Videos</a>
                                        <a class="dropdown-item bg-dark"style={{color:"white"}} href="http://localhost:3000/gaming">Trending Gaming Videos</a>
                                        <a class="dropdown-item bg-dark"style={{color:"white"}} href="http://localhost:3000/science">Trending Science & Technology</a>
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
                                        <a class="dropdown-item bg-dark"style={{color:"white"}} href="http://localhost:3000/hindi">Hindi</a>
                                        <a class="dropdown-item bg-dark"style={{color:"white"}} href="http://localhost:3000/punjabi">Punjabi</a>
                                        <a class="dropdown-item bg-dark"style={{color:"white"}} href="http://localhost:3000/kannada">Kannada</a>
                                        <a class="dropdown-item bg-dark"style={{color:"white"}} href="http://localhost:3000/english">English</a>
                                        <a class="dropdown-item bg-dark"style={{color:"white"}} href="http://localhost:3000/religious">Bhakti</a>                   
                                    </div>
                                </li>
                                <li className="nav-item "><a className="nav-link color-blue border border-success" href="http://localhost:3000/">Log Out</a></li>
                            </ul>

                        </div>
                    </nav>
                </div>
                <div className="mt-4"></div>
            </div>
                );
            }
}