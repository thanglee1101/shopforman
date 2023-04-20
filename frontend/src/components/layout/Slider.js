import React, { Component } from 'react';

class Sliderr extends Component {
    render() {
        return (

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://bizweb.dktcdn.net/100/292/627/themes/633826/assets/slider_2.jpg?1672486759709" height={500}   alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://bizweb.dktcdn.net/100/356/516/collections/slider-3-1.png?v=1560420681907" height={500} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://bizweb.dktcdn.net/100/290/346/themes/754816/assets/slider_1.png?1648527961605" height={500} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://theme.hstatic.net/200000313207/1001020472/14/slider_2.jpg?v=40" height={500} alt="Four slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://bizweb.dktcdn.net/100/292/627/themes/633826/assets/slider_1.jpg?1672486759709" height={500} alt="Four slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Sliderr;