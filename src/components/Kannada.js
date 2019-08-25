import React from "react";
import axios from "axios";

export default class Kannada extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=cwEPvbYIT4M&maxResults=27&type=video&key=AIzaSyCYnz2BIh3II4v9LlDizrr6F2aj7LVCAU0"
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
                <h1 className="display-4 text-center text-success">Popular Kannada Videos</h1>
                <div className="container-fluid">
                    <div className="row">
                        {this.state.collections.map((item) => {
                            return (
                                <div class="card shadow-lg col-lg-4 col-sm-5 mt-2">
                                    <iframe height="350px" src={"https://www.youtube.com/embed/" + item.id.videoId} frameBorder="0"
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