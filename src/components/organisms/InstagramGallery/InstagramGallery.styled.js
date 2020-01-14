import styled from "styled-components";

export const InstagramGrid = styled.div`
  margin: 0 auto;
  display: grid;
  width: 400px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const InstagramImage = styled.img`
  width: 100px;
  height: 100px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
