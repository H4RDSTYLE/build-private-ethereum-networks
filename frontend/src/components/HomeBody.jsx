export const HomeBody = () =>{
    return <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="../images/17010.jpg" alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="../images/20459156.jpg" alt="Second slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the Second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="../images/WallpaperDog-20459078.jpg" alt="Third slide"/>
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

        <h3>Pricing</h3>
        <div className="row">
            <div className="col-4 pricing">
                <h5>Premium</h5>
                <p>10.000€</p>
            </div>
            <div className="col-4 pricing">
                <h5>Standar</h5>
                <p>5.000€</p>
            </div>
            <div className="col-4 pricing">
                <h5>Basic</h5>
                <p>1.000€</p>
            </div>
        </div>
    </div>
}