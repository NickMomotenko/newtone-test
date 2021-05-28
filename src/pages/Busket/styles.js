import styled from "styled-components";

import { ItemWrapp } from "../../UI/Item/styles";

import Button from "../../UI/Button";

export const BusketWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

export const BusketList = styled.div`
  width: 300px;
`;

export const BusketItem = styled(ItemWrapp)`
  position: relative;
`;

export const BusketDeleteItemButton = styled(Button)``;
