import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

export function HomeBody() {
    return <div>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="../images/activos.png" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Sé parte del presente</h5>
                        <span>No te quedes por fuera, la revolución tecnológica no es cosa del futuro.</span>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="center-block  d-block w-100" src="../images/fuera.jpg" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Cientos de activos</h5>
                        <span>Podrás enviar y recibir cientos de activos diréctamente a tu billetera privada.</span>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="../images/real.jpg" alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Al alcance de tus manos</h5>
                        <span>Crea una blockchain desde la comodidad de tu móvil.</span>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <span>
            <span></span>
            {/* Texto e imagenes centrales */}
            <section className="projects-section bg-light " id="projects">
                <div className="container px-4 px-lg-7 container-fluid p-1">
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center ">
                        <p></p>
                        <p></p>

                        <h2 className="text-dark text-center mt-1 font-semibold tracking-tight text-slate-900 text-4xl md:text-6xl">Crea tu propia Blockchain</h2>
                        <p></p>

                        <span className="text-center text-dark-50 mb-0 container-fluid p-4">Pondremos en funcionamiento tu propia Blockchain, el bloque génesis, configuraremos un monedero para minar tus propias criptomonedas y crearemos los nodos necesarios para que tu moneda siempre esté activa y todos los usuarios puedan sincronizar sus monederos. Todo en un clic.</span>
                    </div>
                    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid" src="../images/clic.jpg" alt="..." /></div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-dark">Monitoriza tus activos</h4>
                                        <span className="mb-0 text-dark-50">Ofrecemos conexiones automáticas y seguras a miles de instituciones financieras y plataformas crypto, historial completo de transacciones y métricas de rendimiento, prácticamente todas las criptodivisas y ninguna limitación de tipos y clases de activos financieros.</span>
                                        <hr className="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid" src="../images/telf.jpg" alt="..." /></div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-dark">Desde donde estes</h4>
                                        <span className="mb-0 text-dark-50">Sin ningún tipo de barrera geográfica o lingüística. Podrás operar desde cualquier parte del mundo en tiempo real y solo necesitarás una conexión a Internet.</span>
                                        <hr className="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </span >
        <p></p>
        <p></p>
        <p></p>

        {/* Contacto */}
        < section className="contact-section bg-secondary container-fluid p-1" >
            <p></p>

            <h2 className=" text-light text-center mt-1 font-semibold tracking-tight text-slate-900 text-4xl md:text-6xl">Dónde estamos</h2>
            <p></p>
            <p></p>
            <div className="container px-6 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-10">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Dirección</h4>
                                <hr className="my-4 mx-auto" />
                                <img className="img-fluid" src="../images/mapa.png" alt="..." />
                                Calle Conde Duque, 9, 28015, Madrid, Madrid
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 mb-md-10">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Contáctanos</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">
                                    <p></p>
                                    <span>+34 973 90 38 41</span>
                                    <p></p>
                                    <span>+34 590 10 07 50 </span>
                                    <p></p>
                                    <span>+34 781 70 03 92</span>
                                    <p></p>
                                    <span>exampleETH@example.com</span>
                                    <p></p>
                                    <span>exampleETH2@example.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-10">
                        <div className="card py-4 h-100 ">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2 "></i>
                                <h4 className="text-uppercase m-0 ">Saber más</h4>
                                <hr className="my-4 mx-auto " href="#!" />
                                <p></p>
                                <span><a href="https://twitter.com/?lang=es" target="_blank"><AiOutlineTwitter /> Twitter</a></span>
                                <p></p>
                                <span><a href="https://web.telegram.org/z/"target="_blank"><FaTelegramPlane /> Telegram</a></span>
                                <p></p>
                                <span><a href="https://www.instagram.com/"target="_blank"><AiOutlineInstagram /> Instagram</a></span>
                                <p></p>
                                <span><a href="https://discord.com/"target="_blank"><BsDiscord /> Discord</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>

                </div>
            </div>
        </section >
    </div >


}