import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/productos3.jpg'
import pic02 from '../assets/images/vanina4.jpg'
import pic03 from '../assets/images/local.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Cachorrisimo - Preshop"
                    meta={[
                        { name: 'description', content: 'Cachorrisimo' },
                        { name: 'keywords', content: 'cachorrisimo, petshop' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Productos</h3>
                                <p>Todo lo que buscas para tus mascotas</p>
                            </header>
                            <Link to="/products" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Estetica</h3>
                                <p>Lavados y peinados</p>
                            </header>
                            <Link to="/beauty" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}} className="article100">
                            <header className="major">
                                <h3>Local</h3>
                                <p>Donde nos encontramos</p>
                            </header>
                            <Link to="/local" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex