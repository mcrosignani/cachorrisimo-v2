import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import localImg from '../assets/images/local.png'

const Local = (props) => (
    <Layout>
        <Helmet>
            <title>Cachorrisimo - Local</title>
            <meta name="description" content="local" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Local</h1>
                    </header>
                    <span className="image main"><img src={localImg} alt="" /></span>
                    <div id="local" class="about-heading-content">
                    <section class="page-section about-heading section-top clearfix cta">
                    <div class="row">
                    <div class="col-xl-9 col-lg-10 mx-auto store-description">
                    <div class="cta-inner text-center rounded">
                    <h2 class="section-heading mb-5 header">
                      <span class="section-heading-upper">Veni a Visitarnos!!</span>
                      <br/>
                      <span class="section-heading-lower">Horarios</span>
                    </h2>
                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                      <li class="list-unstyled-item list-hours-item d-flex">
                        Lunes a Viernes
                        <span class="ml-auto"> De 9:00 a 19:00 Hs</span>
                      </li>
                      <li class="list-unstyled-item list-hours-item d-flex">
                        Sabados
                        <span class="ml-auto"> De 10:00 a 18:00 Hs</span>
                      </li>
                      <li class="list-unstyled-item list-hours-item d-flex">
                        Domingos
                        <span class="ml-auto"> Cerrado</span>
                      </li>
                    </ul>
                    <p class="address mb-5">
                      <em>
                        <strong>Huergo 369</strong>
                        <br/>
                        Palermo, Buenos Aires, Argentina
                      </em>
                    </p>
                    <p class="mb-0">
                      <small>
                        <em>Telefonos:</em>
                      </small>
                      <br/>
                      (+54) 011 4773-7810
                      <br/>
                      (+54) 011 15 3053-1486
                    </p>
                    </div>
                    </div>
                    </div>
                    </section>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Local