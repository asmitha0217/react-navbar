import React, { Component } from "react";
import Slider from "react-slick";


export default class Responsive extends Component {
    render() {

        // const { id, firstname, secondname } = this.props;

        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="container ContainerCardSection col-lg-10 col-md-10 col-sm-12 border border-warning rounded">
                <h2><span>Popular courses </span></h2>
                <Slider {...settings}>
                    {/* {
                         function CardFunction() {
                               return (
                                
                            )
                        }
                    } */}
                    
                    <div>
                        <div className="  rounded m-4 p-2 CardFirstBg ">
                            <img src="" alt="ClockImage" />
                            <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                <h5>NDA<br /> Course</h5>

                                <img src=""  alt="ArrowRight" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border-secondary  m-4 p-2 CardSecondBg ">
                            <img src=""  alt="" />
                            <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                <h5>NDA <br /> Course</h5>

                                <img src=""  alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border-secondary  m-4 p-2 CardThirdBg ">
                            <img src=""  alt="" />
                            <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                <h5>NDA <br /> Course</h5>

                                <img src=""  alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="border-secondary  m-4 p-2 CardFourthBg ">
                            <img src=""  alt="" />
                            <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                <h5>NDA <br /> Course</h5>

                                <img src=""  alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="border-secondary  m-4 p-2 CardFirstBg ">
                            <img src=""  alt="" />
                            <div className="d-flex flex-row flex-wrap pt-2 justify-content-between align-items-start">
                                <h5>NDA <br /> Course</h5>

                                <img src=""  alt="" />
                            </div>
                        </div>
                    </div>
                    
                   
                </Slider>
            </div>
        );
    }
}
