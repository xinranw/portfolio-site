import React from "react";

const resumeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Resume = () => (
  <section style={resumeStyle}>
    <iframe
      src="https://drive.google.com/file/d/0B9htgtRutHsnSC11Rk5YeV9kSjQ/preview"
      width="960"
      height="720"
      style={{ width: "100%" }}
    />
  </section>
);

export default Resume;
