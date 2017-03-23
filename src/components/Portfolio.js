import React, { Component } from 'react';

import cabin from "../img/portfolio/cabin.png";
import cake from "../img/portfolio/cake.png";
import circus from "../img/portfolio/circus.png";
import game from "../img/portfolio/game.png";
import safe from "../img/portfolio/safe.png";
import submarine from "../img/portfolio/submarine.png";

export default class Portfolio extends Component {
  render() {
    return (
        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Portfolio</h2>
                        <hr className="star-primary" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={cabin} className="img-responsive" alt="Cabin" />
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={cake} className="img-responsive" alt="Slice of cake" />
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={circus} className="img-responsive" alt="Circus tent" />
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={game} className="img-responsive" alt="Game controller" />
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={safe} className="img-responsive" alt="Safe" />
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src={submarine} className="img-responsive" alt="Submarine" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

    