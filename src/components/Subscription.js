import React from "react";
import axios from "axios";
import Nav from "./Nav";
import {setLogoutInfoInLocalStorage} from '../commons';



export default class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: []
        }
    }
    componentDidMount() {
        // const access_token=localStorage.getItem('access_token')
        // console.log(access_token)
        axios({
            method: 'get',
            url: "https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&maxResults=20&key=AIzaSyCYnz2BIh3II4v9LlDizrr6F2aj7LVCAU0",
            headers: {
                "Authorization": "Bearer ya29.GltyB2Lf2HRScgwK_D75GsmgmkVzo_jlDzp6dhR45I93EMupnzfqrpn-xB2kSQ4mHB3JtVAXDp-vuS8jcVAOBQwQHrOhLMYcVYH2lKiGAxmO7uXg3NUmJ4tUm4dL"
            }
        })

            .then((response) => {
                // const channel_id=response.data.items.resourceId.channelId
                // console.log(channel_id)
                console.log(response.data)
                console.log(response.data.items[0].snippet.title)
                this.setState({
                    collections: [...response.data.items],
                });
            })
    }
    render() {
        return (
            <div>  
            <Nav/>
            <div style={{marginTop:"100px"}}>
            <h1 className="display-3 text-info text-center"style={{fontFamily:'Roboto Mono'}}>Your Subscribed Channels</h1>
                <div className="container-fluid">
                    <div className="row">
                        {this.state.collections.map((item) => {
                            return (
                                <div class="card shadow-lg col-lg-4 border-bottom border-right col-sm-5 mt-2">
                                    {/* <iframe height="350px" src={"https://www.youtube.com/embed/" + item.id.videoId} frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                                    <div class="card-body">
                                        <img src={item.snippet.thumbnails.medium.url}/>
                                        <h4 style={{ fontFamily: "Ropa Sans, sans-serif" }} class="card-title">{item.snippet.title}</h4>
                                        <p style={{ fontFamily: "Ropa Sans, sans-serif" }} class="card-title">{item.snippet.description}</p>
                                        <h2 style={{ fontFamily: "Ropa Sans, sans-serif" }} class="card-title">Total Videos: {item.contentDetails.totalItemCount}</h2>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            </div>
        );
    }
}