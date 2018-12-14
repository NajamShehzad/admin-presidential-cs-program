import React from "react";
import "./404.css"
import {Link} from "react-router-dom"
import search from "../../assets/search.png"

const NotFound = () => {
    return (
        <div className="main-container-my">

            <div className="Not-found">
                <div className="div-container">
                    <div className="left-container">
                        <div className="l-1">
                            <h1 className="We-are-sorry">
                                We are sorry!
                            </h1>
                            <strong className="The-page-you-are-looking-for-is-not-found" >
                                The page you are looking for is not found.
                            </strong>
                        </div>
                        <div className="hidden-show">
                            <img className="search-image" src={search} alt="search" />
                        </div>
                        <div className="l-2">
                            <center>
                                <h1 className="not">
                                    404
                                </h1>
                                <strong className="not-p" >
                                    Not found
                            </strong>
                            </center>
                            <button className="Rectangle-198" ><Link to="/">Go To Home Page</Link> </button>
                        </div>

                    </div>
                    <div className="right-container">
                        <img className="search-image" src={search} alt="search" />
                    </div>

                </div>
            </div>
        </div>


    )
}

export default NotFound; 