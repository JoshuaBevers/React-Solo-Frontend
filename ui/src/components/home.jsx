import React, { useContext } from "react";
import StateContext from "../context";

const Home = () => {
  const [player] = useContext(StateContext);
  const { name } = player;
  return (
    <h1>
      Welcome, {name}!
      <br />
      Please select one of the options in the nav bar above!
    </h1>
  );
};

export default Home;
