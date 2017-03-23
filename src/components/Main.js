import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/bootstrap.css';

export default class Main extends Component {
    render() {
        return (
            <div>
                <link href="../css/bootstrap.min.css" rel="stylesheet" />
                <div id="skipnav"><a href="#maincontent">Skip to main content</a></div>
                <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                <div className="container">
                    
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand" to="/">Start Bootstrap</Link>
                    </div>

                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <Link to="/"></Link>
                            </li>
                            <li className="page-scroll">
                                <Link to="/Portfolio">Portfolio</Link>
                            </li>
                            <li className="page-scroll">
                                <Link to="/Sobre">About</Link>
                            </li>
                            <li className="page-scroll">
                                <Link to="/Contato">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
            </nav>
                {React.cloneElement(this.props.children, this.props)}
                <footer className="text-center">
                    <div className="footer-above">
                        <div className="container">
                            <div className="row">
                                <div className="footer-col col-md-4">
                                    <h3>Location</h3>
                                    <p>3481 Melrose Place
                                        <br />Beverly Hills, CA 90210</p>
                                </div>
                                <div className="footer-col col-md-4">
                                    <h3>Around the Web</h3>
                                    <ul className="list-inline">
                                        <li>
                                            <a href="#" className="btn-social btn-outline"><span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="btn-social btn-outline"><span className="sr-only">Google Plus</span><i className="fa fa-fw fa-google-plus"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="btn-social btn-outline"><span className="sr-only">Dribble</span><i className="fa fa-fw fa-dribbble"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-col col-md-4">
                                    <h3>About Freelancer</h3>
                                    <p>Freelance is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-below">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    Copyright &copy; Your Website 2016
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                
                <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
                    <a className="btn btn-primary" href="#page-top">
                        <i className="fa fa-chevron-up"></i>
                    </a>
                </div>

               
            </div>
        )
    }
}