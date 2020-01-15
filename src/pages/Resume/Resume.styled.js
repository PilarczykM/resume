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

export const HobbiesContainer = styled.div`
  display: flex;
`;

export const HobbyIcon = styled.i`
  position: relative;
  color: #ffd42d;
  border: 1px solid #ffd42d;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  text-align: center;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const HobbyText = styled.h5`
  margin-top: 7px;
  color: #999;
  font-style: italic;
  font-weight: 300;
`;

export const HobbyIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
