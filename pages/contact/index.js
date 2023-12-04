import Footer from "@/components/general/Footer";
import Nav2 from "@/components/page 1/Nav2";
import Nav from "@/components/page3/Nav";
import Topbar from "@/components/Topbar";
import { useRef } from "react";

const Main = () => {
  const userName = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    const messagedetails = {
      userName: userName.current.value,
      email: email.current.value,
      subject: subject.current.value,
      message: message.current.value,
    };
    await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(messagedetails),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Topbar />
      <Nav2 />
      <Nav />
      <div className="container-fluid">
        <h1
          className="text-center my-5
        5 sw-bolder fs-2"
        >
          Contact For Any Queries
        </h1>
        <div className="row d-flex">
          <form
            onSubmit={sendMessageHandler}
            className="col-lg-6 border align-self-center p-5"
          >
            <div class="mb-3">
              <input
                type="text"
                class="form-control p-2"
                id="exampleFormControlInput1"
                placeholder="Yourname"
                ref={userName}
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control p-2"
                id="exampleFormControlInput1"
                placeholder="Your Email"
                ref={email}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control p-2"
                id="exampleFormControlInput1"
                placeholder="Subject"
                ref={subject}
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control p-2"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
                ref={message}
              ></textarea>
            </div>
            <button type="submit" className="btn contact-btn">
              Send Message
            </button>
          </form>
          <div className="col-lg-6 contact px-5">
            <h2 className="fs-4 fw-bolder py-2">Get In Touch</h2>
            <p className="text-muted">
              Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed
              duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et
              erat clita ipsum justo sed.
            </p>
            <h2 className="fs-4 fw-bolder fs-4">Store 1</h2>
            <p>
              <span>
                <i class="bi bi-geo-alt-fill"></i>
              </span>
              <span className="text-muted">123 Street, New York, USA</span>
            </p>
            <p>
              <span>
                <i class="bi bi-envelope-fill"></i>
              </span>
              <span className="text-muted">info@example.com</span>
            </p>
            <p>
              <span>
                <i class="bi bi-telephone-fill"></i>
              </span>
              <span className="text-muted">+012 345 67890</span>
            </p>
            <h2 className="fs-4 fw-bolder fs-4">Store 2</h2>
            <p>
              <span>
                <i class="bi bi-geo-alt-fill"></i>
              </span>
              <span className="text-muted">123 Street, New York, USA</span>
            </p>
            <p>
              <span>
                <i class="bi bi-envelope-fill"></i>
              </span>
              <span className="text-muted">info@example.com</span>
            </p>
            <p>
              <span>
                <i class="bi bi-telephone-fill"></i>
              </span>
              <span className="text-muted">+012 345 67890</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
