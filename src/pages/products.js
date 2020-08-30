import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/productos.jpg'
import pic10 from '../assets/images/productos3.jpg'
import pic12 from '../assets/images/productos5.jpg'
import pic14 from '../assets/images/productos6.jpg'
import pic15 from '../assets/images/productos7.jpg'
import pic16 from '../assets/images/productos8.jpg'
import pic17 from '../assets/images/productos9.jpg'
import pic18 from '../assets/images/productos10.jpg'
import pic20 from '../assets/images/productos12.jpg'

const Products = (props) => (
    <Layout>
        <Helmet>
            <title>Productos</title>
            <meta name="description" content="products" />
        </Helmet>

        <BannerLanding />

        {/* Photo Grid */}
        <div class="row">
            <div class="column">
                <img src={pic08} alt="" />
                <img src={pic12} alt="" />
                <img src={pic20} alt="" />
            </div>
            <div class="column">
                <img src={pic14} alt="" />
            </div>
            <div class="column">
                <img src={pic15} alt="" />
                <img src={pic16} alt="" />
                <img src={pic17} alt="" />
            </div>
            <div class="column">
                <img src={pic18} alt="" />
                <img src={pic10} alt="" />
            </div>
        </div>

    </Layout>
)

export default Products