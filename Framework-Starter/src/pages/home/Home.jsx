import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row justify-content-center align-items-center home-content">
            <div className="col-12 text-center">
              <h1 className="text-uppercase">about component</h1>
              <div className="headingline">
                <i className="fa-solid fa-star"></i>
              </div>

              <div className="row justify-content-space-between p-5">
                <div className="col-6 text-start">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </div>
                <div className="col-6 text-start">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
