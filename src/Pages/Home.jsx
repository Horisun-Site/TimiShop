import React from "react";
import Navbar from "../Component/Navbar";
import Homesec1 from "../Component/Homesec1";
import Nav from "../Component/Nav";
import Slowers from "../Component/Slowers";
import Fetch from "../Component/Fetch";
import Bottom from "../Component/Bottom"
import Common from "../Component/Common";
import Space from "../Component/Space";

const Home = () => {
  
  return (
    <div>
      <Nav/>
      <Navbar />
      <Homesec1/>
      <Slowers/>
      <Fetch/>
      <Common/>
      <Space/>
      <Bottom/>
    </div>
  );
};

export default Home;
