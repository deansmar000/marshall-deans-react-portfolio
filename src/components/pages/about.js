import React from "react";
import profilePicture from "../../../static/assets/images/bio/BottegaPhoto.png";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ")no-repeat",
          backgroundSize: "fit",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <p>
          I am Self motivated, Organized, and easy going. I enjoy building
          websites that are functional and look aesthetically pleasing. My goal
          is to accumulate the necessary knowledge required to provide for
          myself and my family. Through previous work experience, I’ve gained a
          better understanding of how to keep different things organized, which
          I’m positive will be helpful while coding.
        </p>
      </div>
    </div>
  );
}
