import styled, { css } from "styled-components";

const Button = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ social }) => (social ? "20px" : "150px")};
  height: ${({ social }) => (social ? "20px" : "150px")};
  padding: ${({ social }) => (social ? "20px" : "30px 0")};
  background: ${({ social }) =>
    social
      ? "linear-gradient(to right, black 50%, #ffd42d 50%)"
      : "linear-gradient(to right, #ffd42d 50%, white 50%)"};
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  border: 1px solid #eaeaea;
  transition: all 0.25s ease;
  z-index: 1;

  ${({ social }) =>
    social &&
    css`
      border: none;
      &:not(:last-child) {
        border-bottom: 1px solid #fff;
      }
    `}

  &:hover {
    background-position: left bottom;
    ${({ social }) =>
      social &&
      css`
        i {
          color: white;
        }
      `};
  }

  .activeLink> & {
    background-position: left bottom;
  }
      .activeLink> &::after {
        position: absolute;
        display: block;
        content: "";
        top: 50%;
        right: -12px;
        width: 22px;
        height: 22px;
        background-color: #ffd42d;
        transform-origin: center center;
        transform: rotate(45deg) translate(-50%, -50%);
        border: none;
`;

export default Button;
