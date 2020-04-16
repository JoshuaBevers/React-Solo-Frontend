import React, { useContext } from "react";
import StateContext from "../context";
import { Link } from "react-router-dom";

const Home = () => {
  const [player] = useContext(StateContext);
  const { name } = player;
  return (
    <h1>
      Welcome, {name}!
      <br />
      <Link to={`/quests`}>To get started on some quests, click here!</Link>
      <br />
      <Link to={`/profile`}>Or view your stats by clicking here!</Link>
    </h1>
  );
};

export default Home;
