import React from "react";
import Login from "./Login";
import Nav from "./Nav";

export default class Passing extends React.Component{
    constructor(props){
        super(props);

        this.state={
            token:'',
            image:'',
            email:'',
            name:'',
        }
    }
    componentDidMount(){
        this.setState({
            email:this.props.u
        })
    }

    render(){
        return (
            <div>
                    <Nav email={this.state.email}/>
            </div>
        );
    }
}