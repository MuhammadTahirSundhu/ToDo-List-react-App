import React from "react";
import MainTitle from "../components/MainTitle";
import Footer from "../components/Footer";
import img1 from "../Assets/fast.jpg";
import img2 from "../Assets/services.jpg";
import img3 from "../Assets/best.jpg";

function About(props) {
  const textColor = props.Theme === "dark" ? "white" : "black";
  const imageStyle = {
    height: "400px", // Set a fixed height
    objectFit: "cover", // Ensure the image covers the container without stretching
    width: "100%", // Ensure the image spans the full width of the container
  };
  return (
    <>
      <div style={{ color: textColor }}>
        <MainTitle title="About Us" />
      </div>
      <div className="container my-5 mb-5">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img
                src={img1}
                className="d-block w-100"
                alt="..."
                style={imageStyle}
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "White" }}
              >
                <h1>Our Office</h1>
                <p>
                  <b>H-11, Islamabad , Pakistan.</b>
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src={img2}
                className="d-block w-100"
                alt="..."
                style={imageStyle}
              />
              <div className="carousel-caption d-none d-md-block" style={{ color: "White" }}>
                <h1>Our Services</h1>
                <p>
                  <b>
                    At TS-Computing, we deliver tailored solutions that blend
                    innovation and expertise to drive your success. From
                    cutting-edge technology to stunning design, our services are
                    crafted to meet your unique needs and exceed your
                    expectations.
                  </b>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                className="d-block w-100"
                alt="..."
                style={imageStyle}
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "White" }}
              >
                <h1>Our Best</h1>
                <p>
                  <b>
                    There are 10 projects which makes our company top from the
                    other companies of our niche.This is proud for us.
                  </b>
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Footer Theme={props.Theme} />
    </>
  );
}

export default About;
