import React from "react";
import styled from "styled-components";
import db from "../../src/disneyMoviesData.json";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { name } = useParams();

  const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
  `;
  const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;
    img {
      width: 100vw;
      height: 100vh;
      @media (max-width: 768px) {
        width: initial;
      }
    }
  `;
  const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    img {
      max-width: 600px;
      min-width: 200px;
      width: 35vw;
    }
  `;
  const ContentMeta = styled.div`
    max-width: 874px;
  `;

  const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
  `;

  const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb (249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);
    img {
      width: 32px;
    }
    &:hover {
      background: rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
      height: 45px;
      padding: 0px 12px;
      font-size: 12px;
      margin: 0px 10px 0px 0px;
      img {
        width: 25px;
      }
    }
  `;

  const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
  `;

  const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    span {
      background-color: rgb(249, 249, 249);
      display: inline-block;
      &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
      }
      &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
      }
    }
  `;

  const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    div {
      height: 40px;
      width: 40px;
      background: rgb(0, 0, 0);
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
  `;

  // const Video = styled.div`
  // position:relative;
  //   width: 400px;
  //   height: 250px;
  //   @media (max-width: 768px) {
  //     width: 325px;
  //     height: 250px;
  //   }
  // `;

  const Video = styled.div`
    // padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    width: 400px;
    height: 250px;
    iframe {
      inset: 0px;
      display: block;
      // height: 100%;
      object-fit: cover;
      // width: 400px;
      // height: 250px;
      opacity: 1;
      position: absolute;
      transition: opacity 500ms ease-in-out 0s;
      // width: 100%;
      z-index: 1;
      top: 0;
    }

    // &:hover {
    //   box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    //     rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    //   transform: scale(1.05);
    //   border-color: rgba(249, 249, 249, 0.8);
    // }
    @media (max-width: 768px) {
      width: 325px;
      height: 250px;
    }
  `;

  const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  `;

  const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
    @media (max-width: 768px) {
      font-size: 14px;
    }
  `;

  return (
    <Container>
      {db.movies
        .filter((movie, key) => movie.title === name)
        .map((movie, key) => (
          <>
            <Background key={key}>
              {movie.id}
              <img src={movie.backgroundImg} alt={movie.title} />
            </Background>
            <ImageTitle>
              <img alt={movie.title} src={movie.titleImg} />
            </ImageTitle>
            <Video>
              <iframe
                src={movie.videoURL}
                title="YouTube video player"
                frameBorder="0"
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Video>
            <ContentMeta>
              <Controls>
                <Player>
                  <img src="/images/play-icon-black.png" alt="" />
                  <span>Play</span>
                </Player>
                <Trailer>
                  <img src="/images/play-icon-white.png" alt="" />
                  <span>Trailer</span>
                </Trailer>
                <AddList>
                  <span />
                  <span />
                </AddList>
                <GroupWatch>
                  <div>
                    <img src="/images/group-icon.png" alt="" />
                  </div>
                </GroupWatch>
              </Controls>
              <SubTitle>{movie.subTitle}</SubTitle>
              <Description>{movie.description}</Description>
            </ContentMeta>
          </>
        ))}
    </Container>
  );
};

export default Detail;
