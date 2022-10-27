import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

export function HomeBody() {
    return <div>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="../images/blockchain.jpg" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="../images/map.jpg" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the Second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="../images/mining.jpg" alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the Third slide.</p>
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
        <p>
            <p></p>
            {/* Texto e imagenes centrales */}
            <section class="projects-section bg-light" id="projects">
                <div class="container px-4 px-lg-7">
                    <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <h2 class="text-dark text-center mt-1 font-semibold tracking-tight text-slate-900 text-4xl md:text-6xl">Crea tu propia Blockchain</h2>
                        <p class="text-center text-dark-50 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quam labore quasi nesciunt. Nihil harum, error nisi maiores saepe mollitia praesentium, architecto tenetur temporibus eos consequuntur, laudantium cupiditate quos debitis!</p>
                    </div>
                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src="../images/mining.jpg" alt="..." /></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-dark">Rápido</h4>
                                        <p class="mb-0 text-dark-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius delectus voluptatum quidem odio animi mollitia molestias, ab adipisci debitis iusto ratione facere ullam illum possimus architecto aspernatur unde assumenda nihil?</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src="../images/map.jpg" alt="..." /></div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-dark">Fácil</h4>
                                        <p class="mb-0 text-dark-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorem dolores expedita quidem vitae autem iste voluptas, libero et dignissimos nesciunt, sed repudiandae nemo non fuga excepturi, sapiente quis aspernatur?</p>
                                        <hr class="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </p >

        {/* Contacto */}
        < section class="contact-section bg-secondary" >
            <h2 class="text-light text-center mt-1 font-semibold tracking-tight text-slate-900 text-4xl md:text-6xl">Contáctanos</h2>
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Dirección</h4>
                                <hr class="my-4 mx-auto" />
                                <img class="img-fluid" src="../images/mapa.png" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Contáctanos</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">

                                    <p>+34 973 90 38 41</p>
                                    <p>+34 590 10 07 50 </p>
                                    <p>+34 781 70 03 92</p>
                                    <p>exampleETH@example.com</p>
                                    <p>exampleETH2@example.com</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Saber más</h4>
                                <hr class="my-4 mx-auto" />
                                <p><AiOutlineTwitter /> Twitter</p>
                                <p><FaTelegramPlane /> Telegram</p>
                                <p><AiOutlineInstagram /> Instagram</p>
                                <p><BsDiscord /> Discord</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
                    <p>                <p></p>
                    </p>
                </div>
            </div>
        </section >
    </div >


}