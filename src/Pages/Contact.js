import React, { useContext } from "react";
import MainTitle from "../components/MainTitle";
import Footer from "../components/Footer";
import { themeContext } from "..";
function Contact(props) {

  const [Theme,setTheme] = useContext(themeContext);
  const textColor = Theme === "dark" ? "white" : "black";

  return (
    <>
      <div style={{ color: textColor }}>
        <MainTitle title={"Contact Details"} />
      </div>
      <div className="container my-5 mb-5">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <h3>Email</h3>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">tahirsundhu8956@gmail.com</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <h3>Contact No</h3>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">+92-305-496715-5</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <h3>LinkedIn</h3>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <a href="https://www.linkedin.com/in/muhammad-tahir-sundhu">
                  Click here To view profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer Theme={Theme} />
    </>
  );
}

export default Contact;
