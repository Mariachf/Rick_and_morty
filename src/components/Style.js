import styled from "styled-components";
import Backg from "./img/1292288.jpg";

export const Back = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url(${Backg});
  background-repeat: no-repeat;

  button {
    width: 3vw;
    height: 6vh;
    font-size: 17px;
    background-color: #027d8d;
    color: white;
    border: none;
    position: relative;
    top: 26.4em;
    left: 9em;
    -webkit-box-shadow: 3px 3px 2px 2px #82fd67;
    box-shadow: 3px 3px 2px 2px #82fd67;
  }

  input {
    width: 20vw;
    height: 6vh;
    border: none;
    position: relative;
    top: 32em;
    left: 10em;
    -webkit-box-shadow: 4px 3px 2px 2px #82fd67;
    box-shadow: 4px 3px 2px 2px #82fd67;
  }
`;

export const Container = styled.div`
  background-color: #000000;
  .img {
    width: 10vw;
    height: 22vh;
    border: none;
    position: relative;
    bottom: 3em;
  }
`;

export const DivideOne = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 10px;
  margin-top: 10em;
`;
export const Card = styled.div`
  width: 25vw;
  height: 30vh;
  background-color: #034c55;
  border-radius: 10px;

  gap: 15px;
  display: flex;
  transition: all 0.25s;
  font-family: "Shadows Into Light", cursive;

  img {
    position: relative;
    top: 1.5em;
    left: 1em;
    border-radius: 10px;
  }
`;
export const Divide = styled.div`
  width: 45%;
  height: 10vh;
  text-align: center;
  h2 {
    background-color: #4a943b;
    color: #034c55;
    position: relative;
    top: 1em;
    left: 0.5em;
    border-radius: 5px;
  }

  p {
    color: white;
    position: relative;
    top: 2em;
  }
`;
