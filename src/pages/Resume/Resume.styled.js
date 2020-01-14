import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InstagramGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 75%;
  border: 1px solid #999;
`;
