import React from "react";

import { ItemWrapp, ItemTitle, ItemIcon } from "./styles";

import { useCounter } from "../../hooks/useCounter";

import Button from "../Button";
import { Block, Row } from "../Layout";

import Counter from "../../components/Counter";
import Text from "../Text";
import { withData } from "../../context/data";

const Item = ({ product, ...props }) => {
  const { value, incr, decr } = useCounter();

  const { title, price, discount } = product;
  const { addToBusket } = props;

  return (
    <ItemWrapp {...props}>
      <Block>
        <ItemIcon />
      </Block>
      <Row btw>
        <ItemTitle>{title}</ItemTitle>
        <Block>
          <Counter value={value} incr={incr} decr={decr} />
        </Block>
      </Row>
      <Row center btw style={{ marginTop: 20 }}>
        <Block>
          <Text text={`${price}$`} />
          {discount && <Text text={`скидка (25$ за 3кг)`} />}
        </Block>
        <Button
          text="Добавить в корзину"
          onClick={() =>
            addToBusket({
              ...product,
              value,
              price,
            })
          }
        />
      </Row>
    </ItemWrapp>
  );
};

export default withData(Item);
