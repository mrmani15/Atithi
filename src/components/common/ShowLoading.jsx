import React from "react";

const ShowLoading = ({ label }) => {
  return (
    <>
      <div className="text-center mt-5" style={{ fontFamily: "Tomorrow" }}>
        <h3>{label}</h3>
        <br />
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default ShowLoading;
