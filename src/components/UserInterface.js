import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default class UserInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            we: this.props.u,
        }
    }
    render() {
        console.log(this.state.we)
        return (
            <div>
                <Nav />
                {/* <div style={{marginTop:"200px"}}></div> */}
                {/* <form class="form-inline my-2 my-lg-0 ml-auto">
                                    <input class="form-control mr-sm-2"
                                    style={{width:"325px"}} type="search" 
                                    placeholder="Search videos.." aria-label="Search"
                                    value={this.state.keyword}
                                    onChange={this.get_video} />
                                    <button class="btn btn-outline-success my-2 my-sm-0" 
                                    type="submit" 
                                    onClick={() => this.props.history.push(`/a/strict/`)}>
                                    <i class="fa fa-search"></i></button>
                                </form> */}

                <div style={{ marginTop: "100px" }}></div>
                    <div className="container">
                        <div className="row mt-4">
                            <div className=" col-lg-4"
                                onClick={() => this.props.history.push('/trending/mostPopular')}
                                style={{ borderRight: "1px solid #95a5a6", cursor: "pointer", height: "500px" }}>
                                <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Popular Trending Videos</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>        
                            </div>
                            <div className="col-lg-4"
                                onClick={() => this.props.history.push('/music/10')}
                                style={{ borderRight: "1px solid #95a5a6", cursor: "pointer", height: "500px" }}>
                                <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Popular Music Videos</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                            </div>
                            <div className="col-lg-4"
                                onClick={() => this.props.history.push('/gaming/20')}
                                style={{ cursor: "pointer", height: "500px" }}>
                                <div style={{ marginTop: "100px"}}></div>
                                    <h3 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Trending Gaming Videos</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                            </div>
                            <hr className="mb-4 mt-4" style={{ borderBottom: "1px solid #2c3e50", maxWidth: "1200px" }} />
                            <div className="row mt-4">
                                <div className=" col-lg-4 col-sm-5 mt-2"
                                    onClick={() => this.props.history.push('/science/28')}
                                    style={{ borderRight: "1px solid #95a5a6", cursor: "pointer",height: "500px"  }}>
                                <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Relevant Technology Videos</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                                </div>
                                <div className=" col-lg-4 col-sm-5 mt-2"
                                    onClick={() => this.props.history.push('/hindi/6wNFJIbTxNk')}
                                    style={{ borderRight: "1px solid #95a5a6", cursor: "pointer",height: "500px"  }}>
                                <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Awesome Hindi Videos</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                                </div>
                                <div className=" col-lg-4 col-sm-5 mt-2"
                                    onClick={() => this.props.history.push('/punjabi/Kd57YHWqr')}
                                    style={{ cursor: "pointer",height: "500px"  }}>
                                        <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Dance Beat Punjabi</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                                </div>
                            </div>
                            <hr className="mb-4 mt-4" style={{ borderBottom: "1px solid #2c3e50", maxWidth: "1200px" }} />

                            <div className="row mt-4">
                                <div className=" col-lg-4 col-sm-5 mt-2"
                                    onClick={() => this.props.history.push('/kannada/cwEPvbYIT4M')}
                                    style={{ borderRight: "1px solid #95a5a6", cursor: "pointer", height: "500px"  }}>
                                        <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Popular Kannada Videos</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                                </div>
                                <div className=" col-lg-4 col-sm-5 mt-2"
                                    onClick={() => this.props.history.push('/english/PT2_F-1esPk')}
                                    style={{ borderRight: "1px solid #95a5a6", cursor: "pointer",height: "500px"  }}>
                                <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info  text-center"style={{fontFamily:'Roboto Mono'}}>English Love Forever</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                                </div>
                                <div className=" col-lg-4 col-sm-5 mt-2"
                                    onClick={() => this.props.history.push('/religious/Y8e8qcbWzJY')}
                                    style={{ cursor: "pointer",height: "500px"  }}>
                                <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Jai Shree Krishna</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                                </div>
                            </div>
                            <hr className="mb-4 mt-4" style={{borderRight: "1px solid #2c3e50", maxWidth: "1200px"}} />
                            <div className="row mt-4">
                                <div className=" col-lg-4 col-sm-5 mt-2"
                                    onClick={() => this.props.history.push('/sports/23')}
                                    style={{ borderRight: "1px solid #95a5a6", cursor: "pointer", height: "500px"  }}>
                                        <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Most Popular Sports</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                                </div>
                                <div className=" col-lg-4 col-sm-5 mt-2"
                                    onClick={() => this.props.history.push('/english/PT2_F-1esPk')}
                                    style={{ borderRight: "1px solid #95a5a6", cursor: "pointer",height: "500px"  }}>
                                <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info  text-center"style={{fontFamily:'Roboto Mono'}}>English Love Forever</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                                </div>
                                <div className=" col-lg-4 col-sm-5 mt-2"
                                    onClick={() => this.props.history.push('/religious/Y8e8qcbWzJY')}
                                    style={{ cursor: "pointer",height: "500px"  }}>
                                <div style={{ marginTop: "100px" }}></div>
                                    <h3 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Jai Shree Krishna</h3>
                                    <h4 className="text-dark text-center">Best 30 videos for you</h4>
                                    <h3 className="text-dark text-center">Avg Views &#x2192; 10Billion</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                );
            }
}