import Carousel from 'react-bootstrap/Carousel';
import image1 from './company.jpg';
import image2 from './company1.jpg';
import image3 from './company2.jpg';
import "./CarouselComponents.css";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="image w-100 h-40 "
          src={ image1}
          alt="First slide"
        />
        <Carousel.Caption className='content'>
          <h1>Welcome to ZIZMU</h1>
          <p>ZIZMU Software Solutions is committed to delivering High-Quality Software Solutions to our Clients. 
            We Specialize in providing a range of services including Software Development,
             Web Design and Development, Mobile App Development, and more.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image1 d-block w-100"
          src={image2 }
          alt="Second slide"
        />

        <Carousel.Caption className='content'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image2 d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption className='content'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;