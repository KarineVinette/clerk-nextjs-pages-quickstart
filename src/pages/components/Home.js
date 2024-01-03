
import React from "react";

export default function Home() {

return(
<section id="home" className="hero-section-wrapper-5">

                    <header className="header header-6">
                        <div className="navbar-area">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <nav className="navbar navbar-expand-lg">
                                            <a className="navbar-brand" href="index.html">
                                                <h3 className="gradient-text">AWAKEN</h3>
                                            </a>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent6" aria-controls="navbarSupportedContent6" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="toggler-icon"></span>
                                                <span className="toggler-icon"></span>
                                                <span className="toggler-icon"></span>
                                            </button>

                                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent6">
                                                <ul id="nav6" className="navbar-nav ms-auto">
                                                    <li className="nav-item">
                                                        <a className="page-scroll active" href="#home">Accueil</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="page-scroll" href="#feature">Témoignages</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="page-scroll" href="#about">Exemple</a>
                                                    </li>

                                                    <li className="nav-item">
                                                        <a className="page-scroll" href="#pricing">Tarifs</a>
                                                    </li>


                                                </ul>
                                            </div>


                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="hero-section hero-style-5 img-bg" style="background-image: url('assets/img/hero/hero-5/hero-bg.svg')">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero-content-wrapper">
                                        <h2 className="mb-30 wow fadeInUp" data-wow-delay=".2s">Lettre de motivation générée par IA</h2>
                                        <p className="mb-30 wow fadeInUp" data-wow-delay=".4s">Complétez le formulaire et accédez à votre lettre de motivation personnalisée...</p>
                                        <a href="{{ path('app_price') }}" className="button button-lg radius-50 wow fadeInUp" data-wow-delay=".6s">Commencer <i className="lni lni-chevron-right"></i> </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-end">
                                    <div className="hero-image wow fadeInUp" data-wow-delay=".5s">
                                        <img src="assets/img/hero/hero-5/hero-img.svg" alt="" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>)
}