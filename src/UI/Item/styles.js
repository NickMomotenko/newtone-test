import styled from "styled-components";

import { Row } from "../Layout";

export const ItemWrapp = styled(Row)`
  background: #ffc5c5;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))``;

export const ItemTitle = styled.div`
  font-weight: 700;
`;
