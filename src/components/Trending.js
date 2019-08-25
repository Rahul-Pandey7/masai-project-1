import React from "react";
import axios from "axios";

export default class Trending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: "https://www.googleapis.com/youtube/v3/videos/",
            params: {
                "key": "AIzaSyCYnz2BIh3II4v9LlDizrr6F2aj7LVCAU0",
                "part": "snippet",
                "maxResults": "27",
                "chart": "mostPopular",
                "regionCode": "IN",
            }
        })

            .then((response) => {
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
                <h1 className="display-4 text-center text-success">Trending Videos</h1>
                <div className="container-fluid">
                    <div className="row">
                        {this.state.collections.map((item) => {
                            return (
                                <div class="card shadow-lg col-lg-4 col-sm-5 mt-2">
                                    <iframe height="350px" src={"https://www.youtube.com/embed/" + item.id} frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div class="card-body">
                                        <h4 style={{ fontFamily: "Ropa Sans, sans-serif" }} class="card-title">{item.snippet.title}</h4>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}