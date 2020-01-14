import styled from "styled-components";
import { Link } from "react-router-dom";

import Heading from "../../atoms/Heading/Heading";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.i`
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SignContainer = styled.div`
  width: 100%;
  padding: 5px 0;
  background-color: #3f3f3f;
  text-align: center;
  color: #e8e8e8;
`;

export const StyledHeading = styled(Heading)`
  font-size: 12px;
  line-height: 2;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
