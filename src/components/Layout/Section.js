import React from "react";

const Section = props => {
  console.log(props);
  return (
    <section style={{ width: "100vw", minHeight: "100vh" }}>
      {props.children}
    </section>
  );
};
export default Section;
