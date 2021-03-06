import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";


const Home = () => {
  // console.log(db.movies[1]);

  // const listItems = db.movies.map((item) => console.log(item.type));


  const Container = styled.main`
    position: relative; 
    //  background:url("/images/home-background.png");
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
      background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
      content: "";
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;
    }
  `;

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;
