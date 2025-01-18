import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row justify-content-space-between text-center g-5">
            <div className="col-12 col-md-4">
              <div className="footer-item">
                <h2>Location</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="footer-item">
                <h2>AROUND THE WEB</h2>
                <a href="#" className="footer-icon">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="footer-icon">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="footer-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="footer-icon">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="footer-item">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-outter">Copyright &copy; Your Website 2021</div>
    </>
  );
}
