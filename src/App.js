import React from "react";

import { useHistory } from "react-router";

import { Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";
import { withData } from "./context/data";

import Busket from "./pages/Busket";

import Container from "./UI/Container";
import Item from "./UI/Item";
import { Block } from "./UI/Layout";
import Text from "./UI/Text";

const AppWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

const AppList = styled(Block)`
  width: 340px;
`;

const App = (props) => {
  const { data ,totalValue } = props;

  return (
    <AppWrapp>
      <Container>
        <Switch>
          <Route path="/busket">
            <Text text="Корзина" bold />
            <Busket />
          </Route>
          <Route exact path="/">
            <Text text="Страница Продуктов" bold />
            <AppList as="ul">
              {data?.map((product) => (
                <Item key={product.id} as="li" product={product} />
              ))}
            </AppList>
            <Link to="/busket">Перейти в Корзину</Link>
            <div>{totalValue}</div>
          </Route>
        </Switch>
      </Container>
    </AppWrapp>
  );
};

export default withData(App);
