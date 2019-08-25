import React from 'react';
import GoogleLogin from 'react-google-login';
import {GoogleLogout} from 'react-google-login';
import UserInterface from './UserInterface';


const logout = (response) => {
    console.log(response);
}



class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            st:false,
        }
    }
    render() {
        const responseGoogle = (response) => {
            console.log(response);
            this.setState({
                st:true,
            })
        }
        return (
            <div>
                {this.state.st ? (
                    <UserInterface />
                ) : (
                    <div className="container shadow-lg" style={{ width: "500px", height: "600px" }}>
                    <img src="login.png"
                        style={{ width: "100px;", height: "100px;", marginLeft: "150px", marginBottom: "150px" }} ></img><br /><br />
                    <div className="text-center" style={{ height: "50px" }}>
                        <GoogleLogin
                        //    clientId="655108908904-irti9ald4htc49ru8q3fhf4i5vrtpiu4.apps.googleusercontent.com"
                        clientId="655108908904-nqc428bduh1ttkh08c6t6c86s1ots6qn.apps.googleusercontent.com"
                            buttonText="Login"

                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}>
                            <span> Login with Google</span>
                        </GoogleLogin>
                        
                         <GoogleLogout
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={logout}
                        >
                        </GoogleLogout>
                    </div>
                    <div className="text-center">
                        <a href="http://localhost:3000/userinterface"> <img src="fb1.png"
                            style={{ width: "180px", height: "50px", }} ></img></a>
                    </div>
                    {/* <GoogleLogout
                        clientId="582857054355-drok1a2ag8r1e8c6sr60a4kael5cf6sg.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    >
                    </GoogleLogout> */}
                    <div className="mb-3"></div>
                </div>
                )}
            </div>
        );
    }
}
export default Login;
