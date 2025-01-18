import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact mb-5">
        <div className="container">
          <div className="heading text-center m-5">
            <h1 className="text-uppercase text-center">conatct section</h1>
            <div className="headinglinep">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <form action="#">
            <div className="mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="Your Age"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="Your Password"
              />
            </div>

            <button className="custom-button border-0">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
