import React from "react";
import group1 from "../images/group1.jpg";
import group2 from "../images/group2.jpg";
import group3 from "../images/group3.jpg";
import img1 from "../images/carousel1.jpg";
import img2 from "../images/carousel2.jpg";
import img3 from "../images/carousel3.jpg";
import img5 from "../images/item1.jpg";
import img6 from "../images/item2.bmp";
import Logo from "../images/logo.png";
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
];
const shopState = [
  {
    id: 1,
    title: "item 1",
    img: img5,
    price: 220,
  },
  {
    id: 2,
    title: "item 2",
    img: img6,
    price: 50,
  },
];
const groupState = [
  {
    id: Math.random(),
    title: "Groupe 1",
    img: group1,
    details: "12/08/2020",
  },
  {
    id: Math.random(),
    title: "Groupe 2",
    img: group2,
    details: "12/08/2020",
  },
  {
    id: Math.random(),
    title: "Groupe 3",
    img: group3,
    details: "12/08/2020",
  },
];
const feedBackState = [
  {
    id: Math.random(),
    title: "Mohamed",
    feedBack:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit ",
  },
  {
    id: Math.random(),
    title: "Ali",
    feedBack:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit ",
  },
  {
    id: Math.random(),
    title: "Marwa",
    feedBack:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit ",
  },
];
function main() {
  return (
    <div className="container">
      <div className="title">
        <img src={Logo} alt="" style={{ width: "40px", height: "40px" }} />
        <h2>VIVEZ VOTRE AVENTURE</h2>
      </div>
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
      <div className="title">
        <img src={Logo} alt="" style={{ width: "40px", height: "40px" }} />
        <h2>NOS DERNIERS ARTICLES</h2>
      </div>
      {shopState.map((item) => (
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
            <h6>{item.price}Dt</h6>
            <button className="btn btn-primary m-2 btn-lg">Add</button>
            <button className="btn btn-primary btn-lg">Remove</button>
          </div>
        </div>
      ))}
      <div className="title">
        <img src={Logo} alt="" style={{ width: "40px", height: "40px" }} />
        <h2>RENCONTRER NOS GROUPES</h2>
      </div>
      {groupState.map((item) => (
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
            <h6>{item.details} </h6>
            <button className="btn btn-primary btn-sm">More details</button>
          </div>
        </div>
      ))}
      <div className="title">
        <img src={Logo} alt="" style={{ width: "40px", height: "40px" }} />
        <h2>NOS PARTCIPANTS ONT DONNÉ LEURS FEEDBACK</h2>
      </div>
      {feedBackState.map((item) => (
        <div
          className="card"
          key={item.id}
          style={{ width: "300px", height: "400px" }}
        >
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6>{item.feedBack} </h6>
            <button className="btn btn-primary btn-sm">More details</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default main;
