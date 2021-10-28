import styled from "styled-components";

export const Container = styled.section`
  h2 {
    font-size: 2rem;
  }
  h4 {
    font-size: 3rem;
    text-align: center;
    background-color: #eddcd2;
    width: 98.5vw;
    color: #27435e;
  }
  ul {
    margin: 10px auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 700px) {
    h2 {
      font-size: 35px;
    }
    h4 {
      font-size: 35px;
    }
    ul {
      width: 90%;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
