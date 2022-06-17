import React from "react";

const SectionCategories = () => {
  return (
    <section className="store-trend-categories">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <h5>Trend Categories</h5>
          </div>
        </div>
        <div className="row">
          <div
            className="col-6 col-md-3 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a href="/#" className="component-categories d-block">
              <div className="categories-image">
                <img
                  src="/images/categories-gadget.svg"
                  alt=""
                  className="w-100"
                />
              </div>
              <p className="categories-text">Gadgets</p>
            </a>
          </div>
          <div
            className="col-6 col-md-3 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a href="/#" className="component-categories d-block">
              <div className="categories-image">
                <img
                  src="/images/categories-furniture.svg"
                  alt=""
                  className="w-100"
                />
              </div>
              <p className="categories-text">Furniture</p>
            </a>
          </div>
          <div
            className="col-6 col-md-3 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a href="/#" className="component-categories d-block">
              <div className="categories-image">
                <img
                  src="/images/categories-makeup.svg"
                  alt=""
                  className="w-100"
                />
              </div>
              <p className="categories-text">Make Up</p>
            </a>
          </div>
          <div
            className="col-6 col-md-3 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="/#" className="component-categories d-block">
              <div className="categories-image">
                <img
                  src="/images/categories-sneaker.svg"
                  alt=""
                  className="w-100"
                />
              </div>
              <p className="categories-text">Sneaker</p>
            </a>
          </div>
          <div
            className="col-6 col-md-3 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a href="/#" className="component-categories d-block">
              <div className="categories-image">
                <img
                  src="/images/categories-tools.svg"
                  alt=""
                  className="w-100"
                />
              </div>
              <p className="categories-text">Tools</p>
            </a>
          </div>
          <div
            className="col-6 col-md-3 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a href="/#" className="component-categories d-block">
              <div className="categories-image">
                <img
                  src="/images/categories-baby.svg"
                  alt=""
                  className="w-100"
                />
              </div>
              <p className="categories-text">Baby</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCategories;
