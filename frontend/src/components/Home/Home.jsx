import React from "react";

import { Carousel } from "./Carousel/Carousel";
import styled from "@emotion/styled";
import { Product } from "./Featured/Product";
import { Featured } from "./Featured/Featured";

const Home = () => {
  return (
    <>
      <Carousel />
      <Featured />  
    </>
  );
};

export default Home;
