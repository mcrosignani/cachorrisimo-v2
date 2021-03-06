import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerBeauty from '../components/BannerBeauty'

import est1 from '../assets/images/estetica3.jpg'
import est2 from '../assets/images/estetica4.jpg'
import est3 from '../assets/images/estetica6.jpg'
import est5 from '../assets/images/estetica8.jpg'
import est6 from '../assets/images/estetica10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Cachorrisimo - Estetica</title>
            <meta name="description" content="beauty" />
        </Helmet>

        <BannerBeauty />

        <div id="main">
            <section id="one" className="spotlights">
                <section>
                    <img className="image" src={est1} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3></h3>
                            </header>
                            <p></p>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={est2} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3></h3>
                            </header>
                            <p></p>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={est3} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3></h3>
                            </header>
                            <p></p>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={est5} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3></h3>
                            </header>
                            <p></p>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={est6} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3></h3>
                            </header>
                            <p></p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing