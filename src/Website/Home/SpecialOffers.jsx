import React from "react";


const SpecialOffers = () => {
  return (
    <div className="container text-center my-5">
      {/* Heading */}
      <h3 className="fw-bold">Special Offers</h3>
      <p className="text-muted">Exclusive deals for premium car rentals</p>

      {/* Cards Row */}
      <div className="row justify-content-center mt-4 g-4">
        {/* Offer 1 */}
        <div className="col-md-5">
          <div
            className="position-relative shadow-lg d-flex"
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              height: "200px",
            }}
          >
            {/* Background Image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://i.postimg.cc/j5ZqhZFZ/3f50deb039eb5591a1d41da20a14d03ae4745167.jpg')", // replace with your car image
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
              }}
            ></div>

            {/* Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(0,200,83,0.95) 0%, rgba(0,150,255,0.85) 100%)",
                zIndex: 2,
              }}
            ></div>

            {/* Content */}
            <div
              className="d-flex flex-column justify-content-between text-white text-start p-4"
              style={{ zIndex: 3, flex: 1 }}
            >
              <div>
                <h4 className="fw-bold">Flat ₹100 Off</h4>
                <p>On bookings above ₹999</p>
                <div className="d-flex align-items-center gap-2 mt-3">
                  <span
                    className="badge bg-light text-dark px-3 py-2"
                    style={{ borderRadius: "20px" }}
                  >
                    SAVE100
                  </span>
                  <small>Valid till Dec 31, 2024</small>
                </div>
              </div>
              <button className="btn btn-light text-success fw-bold mt-3 px-4 rounded-pill align-self-start">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Offer 2 */}
        <div className="col-md-5">
          <div
            className="position-relative shadow-lg d-flex"
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              height: "200px",
            }}
          >
            {/* Background Image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://i.postimg.cc/j5ZqhZFZ/3f50deb039eb5591a1d41da20a14d03ae4745167.jpg')", // replace with your car image
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
              }}
            ></div>

            {/* Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(155,0,255,0.9) 0%, rgba(255,0,150,0.85) 100%)",
                zIndex: 2,
              }}
            ></div>

            {/* Content */}
            <div
              className="d-flex flex-column justify-content-between text-white text-start p-4"
              style={{ zIndex: 3, flex: 1 }}
            >
              <div>
                <h4 className="fw-bold">Flat ₹150 Off</h4>
                <p>On bookings above ₹1499</p>
                <div className="d-flex align-items-center gap-2 mt-3">
                  <span
                    className="badge bg-light text-dark px-3 py-2"
                    style={{ borderRadius: "20px" }}
                  >
                    SAVE150
                  </span>
                  <small>Valid till Dec 31, 2024</small>
                </div>
              </div>
              <button className="btn btn-light text-primary fw-bold mt-3 px-4 rounded-pill align-self-start">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
