import React from "react";

const Home = (props) => {
  return (
    <div className="Home">
      <button className="btn">
      {props.children}
        <span>submit</span>
      </button>
    </div>
  );
};

export default Home;
