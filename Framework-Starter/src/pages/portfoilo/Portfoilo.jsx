import "./Portfoilo.css";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

import { useRef } from "react";

export default function Portfoilo() {
  const modalref = useRef(null);
  const modalimg = useRef(null);

  function showModal(e) {
    modalimg.current.src = e;
    modalref.current.classList.remove("d-none");
    modalref.current.classList.add("d-flex");
  }

  function hideModal(e) {
    if (e.target === modalimg.current) {
      return;
    }

    modalref.current.classList.remove("d-flex");
    modalref.current.classList.add("d-none");
  }

  return (
    <>
      <div className="portfoilo">
        <div className="container">
          <div className="heading text-center m-5">
            <h1 className="text-uppercase text-center">portfolio component</h1>
            <div className="headinglinep">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <div className="row mb-5 g-5">
            <div className="col-12 col-md-4">
              <div
                className="card"
                onClick={() => {
                  showModal(port1);
                }}
              >
                <div className="card-image">
                  <img src={port1} className="w-100 rounded" alt="card" />
                </div>
                <div className="card-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="card"
                onClick={() => {
                  showModal(port2);
                }}
              >
                <div className="card-image">
                  <img src={port2} className="w-100 rounded" alt="card" />
                </div>
                <div className="card-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="card"
                onClick={() => {
                  showModal(port3);
                }}
              >
                <div className="card-image">
                  <img src={port3} className="w-100 rounded" alt="card" />
                </div>
                <div className="card-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="card"
                onClick={() => {
                  showModal(port1);
                }}
              >
                <div className="card-image">
                  <img src={port1} className="w-100 rounded" alt="card" />
                </div>
                <div className="card-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="card"
                onClick={() => {
                  showModal(port2);
                }}
              >
                <div className="card-image">
                  <img src={port2} className="w-100 rounded" alt="card" />
                </div>
                <div className="card-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="card"
                onClick={() => {
                  showModal(port3);
                }}
              >
                <div className="card-image">
                  <img src={port3} className="w-100 rounded" alt="card" />
                </div>
                <div className="card-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={modalref}
        onClick={hideModal}
        className="custom-modal d-none justify-content-center align-items-center text-center"
      >
        <img className="w-50" ref={modalimg} />
      </div>
    </>
  );
}
