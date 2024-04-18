import React from "react";
import { Container} from "react-bootstrap";
//import Particle from "../Particle";
function Contact() {
  return (
    <>
    <Container fluid className="project-section">
      <Container>
      <h1 className="project-heading">
          Contact <strong className="purple">Us </strong>
        </h1>
        <p style={{ color: "white" }}>
        Please fill out the form below to contact me.
        </p>
        <form>
    <div className="mb-4">
        <label for="exampleFormControlInput1" className="form-label" style={{color:"white",display:"flex"}}>
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Your Full Name"
        />
      </div>
      <div className="mb-4">
        <label for="exampleFormControlInput1" className="form-label" style={{color:"white",display:"flex"}}>
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-4">
        <label for="exampleFormControlTextarea1" className="form-label" style={{color:"white",display:"flex"}}>
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter Your Message"
        ></textarea>
      </div>
      <div className="mb-4">
      <button type="submit" className="btn btn-outline-secondary">Submit</button>
      </div>
      </form>
      </Container>
    </Container>
    </>
  );
}

export default Contact;
