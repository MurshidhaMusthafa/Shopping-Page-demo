import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    
    <div className="bg-gray-200">
      <Carousel className="px-[40pt] py-[40pt] pt-0">
        <Carousel.Item>
          <img className="d-block w-100" src="Images/image1.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="Images/image2.png" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="Images/image3.png" alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="Images/image1.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src="Images/image1.png" alt="First slide" />
      </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
