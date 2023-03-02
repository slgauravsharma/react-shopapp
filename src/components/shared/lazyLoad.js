import React, { lazy, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";

const LazyLoad = (
  importFunc,
  { fallback = null } = {
    fallback: (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    ),
  }
) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyLoad;
