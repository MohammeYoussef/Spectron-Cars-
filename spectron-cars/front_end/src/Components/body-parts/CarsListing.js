import React, { useState, useEffect } from "react";
// import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import popListingData from "./pop-listing-data";
import axios from "axios"; //(for making HTTP requests)
import Carousel from "react-multi-carousel"; // Carousel
import "react-multi-carousel/lib/styles.css"; //Carousel

function Cards(props) {
  return (
    <div className="pop-card-main2">
      <div className="container2">
        <div className="upper2">
          <img id="car-img2" src={props.img} alt="" />
          <div className="zoomed-animation2">
            <span>
              <FontAwesomeIcon icon="fa-solid fa-camera" />
            </span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-play" />3
            </span>
            <span id="reaction2">
              <FontAwesomeIcon icon="fa-solid fa-shuffle" />
            </span>
            <span id="reaction2">
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </span>
          </div>
        </div>
        <div className="mid2">
          <h3 className="price2">
            <span>$</span>
            {props.price}
          </h3>
          <p className="carname-model2">{props.name}</p>
          <div className="spans2">
            <span>
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </span>
            <p id="p-content2">
              {props.rating} <span>({props.reviews} reviews)</span>
            </p>
          </div>
        </div>
        <div className="lower2">
          <span>
            <FontAwesomeIcon id="lower-icon" icon="fa-solid fa-road" />
            {props.mileage}
          </span>
          <span>
            <FontAwesomeIcon id="lower-icon" icon="fa-solid fa-gear" />
            {props.transmission}
          </span>
          <span>
            <FontAwesomeIcon id="lower-icon" icon="fa-solid fa-gas-pump" />
            {props.fueltype}
          </span>
        </div>
      </div>
    </div>
  );
}
export default function CarsListing(props) {
  // for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // const filterItmes = popListingData.filter(curdata =>
  //     curdata.name.toLocaleLowerCase().indexOf(props.keyword.toLocaleLowerCase() !== -1)
  // )
  let [cars_data, setCars_data] = useState([]);

  useEffect(() => {
    let fetchAllCars = async () => {
      try {
        let res = await axios.get("http://localhost:8800/cars");
        console.log(res);
        setCars_data(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCars();
  }, []);
  const Dynamic_card2 = cars_data.map((items) => items);

  console.log(Dynamic_card2);

  const lowercaseInputValue = props.keyword.toLowerCase();
  const filteredData = Dynamic_card2.filter((item) => {
    const lowercaseItemName = item.name.toLowerCase();

    // console.log('name' + lowercaseItemName)
    return (
      lowercaseItemName.includes(lowercaseInputValue) &&
      (item.car_condition === props.condition || props.condition === "") &&
      (item.make === props.make || props.make === "") &&
      (item.model === props.model || props.model === "") &&
      (item.type === props.type || props.type === "") &&
      (item.year_made === props.year || props.year === "") &&
      (item.mileage >= props.mileageMin || props.mileageMin === "") &&
      (item.mileage <= props.mileageMax || props.mileageMax === "") &&
      (item.fueltype === props.fuelTypes || props.fuelTypes === "") &&
      (item.transmission === props.transmissions || props.transmissions === "")
    );
  });

  // console.log(filteredData)
  const Dynamic_card = filteredData.map((items) => <Cards {...items} />);

  return (
    <div className="popular-main2">
      <div className="card-container2">
        <Carousel
          draggable={false}
          showDots={false}
          itemClass="ahmed"
          containerClass="Carousel_container"
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          // centerMode={true}
          arrows={true}
          // customDot={ol}
          // ssr={true} // means to render carousel on server-side.
          // transitionDuration={500}
          // containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
        >
          {Dynamic_card}
        </Carousel>
      </div>
    </div>
  );
}
