import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="blog-section pt-150 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8">
            <div className="section-title mb-60 text-center">
              <h1>Our Latest Blog Post</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8">
            <div className="single-blog blog-left">
              <div className="image">
                <a href="javascript:void(0)">
                  <img src="assets/img/blog/blog-1.jpg" alt="" />
                </a>
              </div>
              <div className="content">
                <div className="meta">
                  <span className="author">
                    Posted by: <a href="javascript:void(0)">Jhon Smith</a>
                  </span>
                  <span>Feb 2, 2020</span>
                </div>
                <h3>
                  <a href="javascript:void(0)">
                    Lorem ipsum dolor sit aconse tetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </a>
                </h3>
                <a href="javascript:void(0)">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="single-blog blog-left">
              <div className="image">
                <a href="javascript:void(0)">
                  <img src="assets/img/blog/blog-2.jpg" alt="" />
                </a>
              </div>
              <div className="content">
                <div className="meta">
                  <span className="author">
                    Posted by: <a href="javascript:void(0)">Jhon Smith</a>
                  </span>
                  <span>Feb 2, 2020</span>
                </div>
                <h3>
                  <a href="javascript:void(0)">
                    Lorem ipsum dolor sit aconse tetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </a>
                </h3>
                <a href="javascript:void(0)">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="single-blog blog-left">
              <div className="image">
                <a href="javascript:void(0)">
                  <img src="assets/img/blog/blog-3.jpg" alt="" />
                </a>
              </div>
              <div className="content">
                <div className="meta">
                  <span className="author">
                    Posted by: <a href="javascript:void(0)">Jhon Smith</a>
                  </span>
                  <span>Feb 2, 2020</span>
                </div>
                <h3>
                  <a href="javascript:void(0)">
                    Lorem ipsum dolor sit aconse tetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </a>
                </h3>
                <a href="javascript:void(0)">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
