import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import UserInterface from './UserInterface';
import {Link} from "react-router-dom";
import {setLoginInfoInLocalStorage} from '../commons';
import $ from "jquery";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            err:null,
             strings:["Trending","Popular","Relevant"]      
        }
    }
    // componentDidMount(){
    //       $('rahul').humanTyping(typingPh, 100);
    //     };
    render() {
        console.log(this.state.clicked)
        const responseGoogle = (response) => {
            setLoginInfoInLocalStorage(response.profileObj,response.Zi);
            console.log(response);
            this.setState({
                clicked: true,
            })
        }
        const failureResponseGoogle=(response) => {
            this.setState({
                err: response.error,
            })
        }
        return (
            <div>
             {/* <div style={{backgroundImage:"url(./krish.jpg)", backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"100vh"}}> */}
                <nav class="navbar navbar-expand-lg navbar-light"style={{backgroundColor:"#290330"}}>
                    <Link to="userinterface" className="navbar-brand logo_h text-center"><img src="ourtube-white.svg" style={{ width: "125px", height: "40px", marginLeft:"40px" }} />
                    {this.state.arr}</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <div style={{ marginTop: "100px"}}>
                     {this.state.clicked ? (
                       
                        <UserInterface />
                    ) : ( 
                            <div className="container mt-3" style={{backgroundColor:"rgba(0,0,0,0.3)"}}>
                                <p className="text-center"> <img src="outube.svg"
                                    style={{ width: "100px;", height: "100px;", marginBottom: "140px", marginTop: "90px" }}>
                                </img></p>
                                <h2 className="display-3" style={{ fontFamily: 'Oswald', color:"black" }}>We are creating better <b>Tube</b> for you</h2>
                                <br /><br/>
                                <h2 className="display-4"style={{ fontFamily: 'Oswald', color:"black" }}>Here's the <rahul> Trending Popular relevant</rahul> Videos..</h2>
                                <br/> <br/>
                                <h5 style={{color:"black",fontSize:"59px", fontFamily: 'cursive'}} className="text-center">Enjoy the Awesomeness..</h5>
                                <br/>
                                <div className="text-center border-outline" style={{ height: "50px" }}>
                                    <GoogleLogin
                                        //    clientId="655108908904-irti9ald4htc49ru8q3fhf4i5vrtpiu4.apps.googleusercontent.com"
                                        clientId="655108908904-nqc428bduh1ttkh08c6t6c86s1ots6qn.apps.googleusercontent.com"
                                        buttonText="Login"

                                        onSuccess={responseGoogle}
                                        scope='profile email https://www.googleapis.com/auth/youtube.readonly'
                                        onFailure={this.failureResponseGoogle}
                                        cookiePolicy={'single_host_origin'}>
                                        <span> Login with Google</span>
                                    </GoogleLogin>
                                    {this.state.err && <div> Error in authenticating..</div>}
                                </div>
                                <div className="mb-3"></div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}
export default Login;
