import React, { useEffect } from "react";
import MainTitle from "../components/MainTitle";
import introImage from "../Assets/intro.jpg";
import img1 from "../Assets/qq.jpeg";
import img2 from "../Assets/ww.jpeg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Home(props) {
  const textColor = props.Theme === "dark" ? "white" : "black";
  const imgBgColor = props.Theme === "dark" ? "black" : "white";

  useEffect(() => {
    // Dynamically add Google Font link
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cleanup the font link on component unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <div style={{ color: textColor }}>
        <MainTitle title={"Home"} />
      </div>
      <div
        className="container my-5"
        style={{
          display: "flex",
          alignItems: "Center",
          justifyContent: "Center",
          maxWidth: "80%",
          color: textColor,
          backgroundColor: imgBgColor,
        }}
      >
        <div
          className="card mb-3"
          style={{
            maxWidth: "100%",
            color: textColor,
            backgroundColor: imgBgColor,
          }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={introImage}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">My ToDo List</h2>
                <p
                  className="card-text my-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Welcome to My ToDo List—a sleek and intuitive task management
                  app built with React! Whether you’re organizing daily chores,
                  tracking work projects, or setting personal goals, our app
                  provides a clean and user-friendly interface to help you stay
                  on top of your tasks.
                  <br />
                  <br />
                  <br />
                  <strong>
                    <i>“The future depends on what you do today.”</i>
                  </strong>
                  <br />— Mahatma Gandhi
                  <br />
                  <br />
                  My ToDo List is more than just a tool; it's a way to
                  streamline your daily routine and achieve your objectives with
                  clarity and efficiency. Dive in today and transform how you
                  manage your tasks!
                  <br />
                  <br />
                  <br />
                  <br />
                  Start using My ToDo List today and take control of your to-dos
                  with simplicity and efficiency!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ color: textColor }}>
        <MainTitle title={"Resources"} />
      </div>
      <div
        className="container my-5"
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Link to="/addTodo">
          <div
            className="card text-bg-dark m-2 my-5"
            style={{
              width: "250px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={introImage}
              className="card-img"
              alt="..."
              onClick={() => {}}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div
              className="card-img-overlay"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "40%",
              }}
            >
              <h3 className="card-title">Add todo</h3>
              <p className="card-text">Add your todo task here!.</p>
            </div>
          </div>{" "}
        </Link>
        <Link to="/myTodos">
          {" "}
          <div
            className="card text-bg-dark m-2 my-0 "
            style={{
              width: "300px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={img1}
              className="card-img"
              alt="..."
              onClick={() => {
                props.setdeleteFlag(0);
                console.log("hlo");
              }}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div
              className="card-img-overlay"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "40%",
              }}
            >
              <h3 className="card-title">My toDo's</h3>
              <p className="card-text">
                All my todo which are pending or not completed are placed here!
              </p>
            </div>
          </div>
        </Link>
        <Link to="/myTodos">
          {" "}
          <div
            className="card text-bg-dark m-2 my-5"
            style={{
              width: "250px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={img2}
              className="card-img"
              alt="..."
              onClick={() => {
                props.setdeleteFlag(1);
                console.log("hlo");
              }}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div
              className="card-img-overlay"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "40%",
              }}
            >
              <h3 className="card-title">Delete todo</h3>
              <p className="card-text">
                Delete Your todo which you want or which are completed!
              </p>
            </div>
          </div>
        </Link>
      </div>
      <Footer Theme={props.Theme} />
    </>
  );
}

export default Home;
