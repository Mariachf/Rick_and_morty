import React from "react";
import Axios from "axios";
import * as S from "./Style";
import { SlMagnifier } from "react-icons/sl";

const API = Axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

export default class Api extends React.Component {
  state = {
    infos: [],
    filtro: []
  };

  pegarPersonagens = async () => {
    const resposta = await API.get();

    const itensApi = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({
      infos: itensApi
    });
  };

  componentDidMount() {
    this.pegarPersonagens();
  }
  render() {
    return (
      <S.Container>
        <S.Back>
          <input placeholder="Search" />
          <button>
            <SlMagnifier />
          </button>
        </S.Back>

        <S.DivideOne>
          {this.state.infos.map((item) => (
            <S.Card>
              <img src={item.image} alt="" className="img" />
              <S.Divide>
                <h2>{item.name}</h2>
                <p>{item.species}</p>
                <p>{item.gender}</p>
                <p>{item.origin.name}</p>
              </S.Divide>
            </S.Card>
          ))}
        </S.DivideOne>
      </S.Container>
    );
  }
}
