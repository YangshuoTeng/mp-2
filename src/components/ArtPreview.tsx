import styled from "styled-components";
import {Fields} from "../interfaces/Fields.ts";

const AllFieldDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: lightblue;
`;

const SingleFieldDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    width: 70%;
    padding: 2%;
    margin: 1% auto;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;
const H1 = styled.h1`
    color: blue;
`
const H2 = styled.h2`
    color: green;
`
const P = styled.p`
    color: red;
`
export default function ArtPreview(props : { data:Fields[] } ) {
    return(
      <AllFieldDiv>
          {
              props.data.map((f:Fields)=>
                  <SingleFieldDiv key={f.id}>
                      <H1>title:{f.title}</H1>
                      <H2>medium_display:{f.medium_display}</H2>
                      <P>artist_display:{f.artist_display}</P>
                  </SingleFieldDiv>
              )
          }
      </AllFieldDiv>
    );
}