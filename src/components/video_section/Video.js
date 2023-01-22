import React from "react";

const Video = () => {
  return (
    <section id="video" className="video-section img-bg mt-120 pt-110 pb-200">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8">
            <div className="section-title text-center mb-80">
              <h1>
                Watch our Conference <br />
                video
              </h1>
            </div>
            <div className="video-btn-wrapper text-center">
              <a href="#" className="video-btn glightbox">
                <i className="lni lni-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
