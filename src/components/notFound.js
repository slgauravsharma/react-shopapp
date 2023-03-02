import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  const isPrevPage = document.referrer !== "";
  return (
    <div className="d-flex justify-content-between p-4 m-4">
      <div>
        <h2 className="display-5 text-primary pb-5">
          Looks like we can’t find that page.
        </h2>
        <div>
          <div className="text-steel-grey8 text-18">
            What would you like to do?
          </div>
          <div className="mt-3">
            <Link className="text-secondary text-14" to="/">
              Return to my jug tour
            </Link>
          </div>
          <div className="mt-2">
            <Link
              className="mt-1 text-secondary text-14"
              to="#"
              onClick={() => (isPrevPage ? navigate(-1) : navigate("/"))}
            >
              Return to lastPage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
