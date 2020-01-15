import styled from "styled-components";

import Item from "../../atoms/Item/Item";

export const StyledItem = styled(Item)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const RatingContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 15px;
`;

const Rating = () => `
  display: inline-block;
  margin: 0 3px;
  height: 6px;
  width: 6px;
  position: relative;
  border-radius: 100%;
`;

export const RatingFull = styled.span`
  ${Rating};
  background-color: #ffd42d;
`;

export const RatingTransparent = styled.span`
  ${Rating};
  background-color: #eaeaea;
`;
