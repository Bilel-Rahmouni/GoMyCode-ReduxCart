import React from "react";
import img1 from "../images/carousel1.jpg";
import img2 from "../images/carousel2.jpg";
import img3 from "../images/carousel3.jpg";
import img4 from "../images/carousel4.jpg";
import img5 from "../images/carousel5.jpg";
import img6 from "../images/carousel6.jpg";
const eventState = [
  {
    id: Math.random(),
    title: "event 1",
    img: img1,
    date: "12/08/2020",
  },
  {
    id: Math.random(),
    title: "event 2",
    img: img2,
    date: "12/08/2020",
  },
  {
    id: Math.random(),
    title: "event 3",
    img: img3,
    date: "12/08/2020",
  },
  {
    id: Math.random(),
    title: "event 4",
    img: img4,
    date: "12/08/2020",
  },
  {
    id: Math.random(),
    title: "event 5",
    img: img5,
    date: "12/08/2020",
  },
  {
    id: Math.random(),
    title: "event 6",
    img: img6,
    date: "12/08/2020",
  },
];
function eventsContainer() {
  return (
    <div className="eventsContainer">
      {eventState.map((item) => (
        <div
          className="card"
          key={item.id}
          style={{ width: "300px", height: "400px" }}
        >
          <img
            className="card-img-top"
            src={item.img}
            alt=""
            style={{ width: "300px", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6>{item.date} </h6>
            <button className="btn btn-primary btn-sm">More details</button>
          </div>
        </div>
      ))}
      {eventState.map((item) => (
        <div
          className="card"
          key={item.id}
          style={{ width: "300px", height: "400px" }}
        >
          <img
            className="card-img-top"
            src={item.img}
            alt=""
            style={{ width: "300px", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6>{item.date} </h6>
            <button className="btn btn-primary btn-sm">More details</button>
          </div>
        </div>
      ))}
      {eventState.map((item) => (
        <div
          className="card"
          key={item.id}
          style={{ width: "300px", height: "400px" }}
        >
          <img
            className="card-img-top"
            src={item.img}
            alt=""
            style={{ width: "300px", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6>{item.date} </h6>
            <button className="btn btn-primary btn-sm">More details</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default eventsContainer;
