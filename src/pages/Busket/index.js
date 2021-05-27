import React from "react";

import { withData } from "../../context/data";

import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";

import { BusketWrapp, BusketItem, BusketList } from "./styles";

const Busket = (props) => {
  const { busket, totalValue } = props;

  if (!busket.length) {
    return <Text text="Корзина пуста ..." />;
  }

  return (
    <BusketWrapp>
      <BusketList as="ul">
        {busket?.map(({ id, title, price, value }) => (
          <BusketItem key={id} as="li">
            <Block>
              <Text text={title} bold />
            </Block>
            <Block>
              <Block>
                <Text text={`Количество: ${value}`} />
              </Block>
              <Block>
                <Text text={`Цена: ${price}`} />
              </Block>
            </Block>
          </BusketItem>
        ))}
      </BusketList>
      <Text text={`Общай стоимость: ${totalValue}`} />
    </BusketWrapp>
  );
};

export default withData(Busket);
