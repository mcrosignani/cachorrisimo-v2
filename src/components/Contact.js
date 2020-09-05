import React from 'react'

const mapStyles = {
    width: '100%',
    height: '100%'
};

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.254406636171!2d-58.434750385196374!3d-34.57242876334941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5962682ffb1%3A0xc5adafaef210c90!2sCachorr%C3%ADsimo!5e0!3m2!1ses!2sar!4v1597671048188!5m2!1ses!2sar" frameborder="0" style={mapStyles} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <span>cachorrisimopetshop@gmail.com</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Telefono</h3>
                        <span>(+54) 11-3053-1486</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Direccion</h3>
                        <span>Huergo 369<br />
                        Palermo, Buenos Aires<br />
                        Argentina</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
