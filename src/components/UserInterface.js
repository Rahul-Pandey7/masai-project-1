import React from "react";

export default class UserInterface extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron" style={{backgroundImage: "linear-gradient(to right, #009fff, #ec2f4b)"}}>
                    <div className="row">
                        <div className="card shadow-lg col-lg-4 col-sm-5 mt-2">
                            <div className="card m-0 p-0">  
                            <iframe height="350" src="https://www.youtube.com/embed/DLX62G4lc44" frameBorder="0"
                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="card shadow-lg col-lg-4 col-sm-5 mt-2">
                            <div className="card m-0 p-0">
                            <iframe height="350" src="https://www.youtube.com/embed/EceJQ05KTf4" 
                             frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="card shadow-lg col-lg-4 col-sm-5 mt-2">
                            <div className="card">
                                <iframe height="350" src="https://www.youtube.com/embed/V5M2WZiAy6k" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card shadow-lg col-lg-4 col-sm-5 mt-2">
                            <div className="card">
                                <iframe height="350" src="https://www.youtube.com/embed/1ZYbU82GVz4" frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="card shadow-lg col-lg-4 col-sm-5 mt-2">
                            <div className="card">
                                <iframe height="350" src="https://www.youtube.com/embed/y7e-GC6oGhg"
                                 frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="card shadow-lg col-lg-4 col-sm-5 mt-2">
                            <div className="card">
                                <iframe height="350" src="https://www.youtube.com/embed/PKIhyCzlKWU" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card shadow-lg col-lg-4 col-sm-5 mt-2">
                            <div className="card">
                                <iframe height="350" src="https://www.youtube.com/embed/DLX62G4lc44" frameBorder="0"
                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="card shadow-lg col-lg-4 col-sm-5 mt-2">
                            <div className="card">
                            <iframe height="350" src="https://www.youtube.com/embed/Kd57YHWqrsI" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="card shadow-lg col-lg-4 col-sm-5 mt-2">
                            <div className="card">
                            <iframe height="350" src="https://www.youtube.com/embed/5X7WWVTrBvM" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}