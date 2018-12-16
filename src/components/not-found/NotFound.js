import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <Link to="/" className="btn btn-primary btn-lg">
                <span className="glyphicon glyphicon-home" />
                Take Me Home{" "}
              </Link>
              <a
                href="mailto:datfc97pro@gmail.com"
                className="btn btn-default btn-lg"
              >
                <span className="glyphicon glyphicon-envelope" /> Contact
                Support{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
