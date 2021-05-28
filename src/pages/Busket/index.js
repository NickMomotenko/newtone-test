import React from "react";

import { Link } from "react-router-dom";

import { withData } from "../../context/data";

import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";

import {
  BusketWrapp,
  BusketItem,
  BusketList,
  BusketDeleteItemButton,
} from "./styles";

const Busket = (props) => {
  const { busket, totalValue, deleteItemFromBusket } = props;

  return (
    <BusketWrapp>
      <BusketList as="ul">
        {!busket.length ? (
          <Text text="Корзина пуста ..." />
        ) : (
          <Block>
            {busket?.map(({ id, title, value }) => (
              <BusketItem key={id} as="li">
                <Block>
                  <Text text={title} bold />
                </Block>
                <Block>
                  <Block>
                    <Text text={`Количество: ${value}`} />
                  </Block>
                </Block>
                <Row style={{ justifyContent: "flex-end" }}>
                  <BusketDeleteItemButton
                    text="Delete"
                    onClick={() => deleteItemFromBusket(id)}
                  />
                </Row>
              </BusketItem>
            ))}
            <Text text={`Общай стоимость: ${totalValue}`} />
          </Block>
        )}
      </BusketList>

      <Link to="/">Перейти в Список</Link>
    </BusketWrapp>
  );
};

export default withData(Busket);
