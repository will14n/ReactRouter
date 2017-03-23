import React, { Component } from 'react';


import profile from "./img/profile.png";

export default class App extends Component {
    render() {
        return (
            <div id="page-top" className="index">
                    
            <header>
                <div className="container" id="maincontent" tabindex="-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-responsive" src={profile} alt="" />
                            <div className="intro-text">
                                <h1 className="name">Start Bootstrap</h1>
                                <hr className="star-light" />
                                <span className="skills">Web Developer - Graphic Artist - User Experience Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        )
    }
}