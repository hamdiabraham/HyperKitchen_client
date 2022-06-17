import React from "react";

const SectionCarousel = () => {
  return (
    <section className="store-carousel">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="zoom-in">
            <div
              id="storeCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  className="active"
                  data-target="#storeCarousel"
                  data-slide-to="0"
                ></li>
                <li data-target="#storeCarousel" data-slide-to="1"></li>
                <li data-target="#storeCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/images/banner.jpg"
                    alt="Carousel Banner"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/banner.jpg"
                    alt="Carousel Banner"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/banner.jpg"
                    alt="Carousel Banner"
                    className="d-block w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCarousel;
