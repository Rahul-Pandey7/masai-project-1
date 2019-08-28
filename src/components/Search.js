import React from "react";
import axios from "axios";
import Nav from "./Nav";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            collections: []
        }
    }

    // get_video = (e) => {
    //     this.setState({
    //         keyword: e.target.value
    //     })
    // }

    componentDidMount(){
        axios({
            method: 'get',
            url: "https://www.googleapis.com/youtube/v3/search/",
            params: {
                "key": "AIzaSyCYnz2BIh3II4v9LlDizrr6F2aj7LVCAU0",
                "part": "snippet",
                "maxResults": "27",
                "safeSearch" : this.props.match.params.id,
                "q": this.props.match.params.name,
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
        console.log(this.props)
        return (
            <div>
                <Nav/>
             <div style={{marginTop:"100px"}}></div>
                {/* <div className="container">
                    <div className="row m-0 p-0">
                        <div className="col col-12 col-lg-10 m-0 p-0 text-center">
                            <input type="text" name="search" onChange={this.get_video}
                                value={this.state.keyword}
                                placeholder="search videos.." />
                            <button type="button"
                                onClick={this.search}>Search</button>
                        </div>
                    </div>
                </div><br /> <br /> */} 
                <div className="container-fluid">
                    <div className="row">
                        {this.state.collections.map((item) => {
                            return (

                                <div class="card shadow-lg col-lg-4 col-sm-5 mt-2">
                                    <iframe height="350px" src={"https://www.youtube.com/embed/" + item.id.videoId} frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div class="card-body">
                                        <h4 style={{ fontFamily: "Ropa Sans, sans-serif" }} class="card-title">{item.snippet.title}</h4>
                                        <p style={{ fontFamily: 'Livvic, sans-serif' }} class="card-text">{item.snippet.description}</p>
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