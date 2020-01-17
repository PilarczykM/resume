import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 0 40px;
`;

export const Title = styled.h2`
  padding: 10px 0;
  font-size: 14px;
  font-weight: 400;
`;

export const LinkTo = styled.a`
  color: #444;
  text-decoration: none;
  margin-left: 10px;
`;
