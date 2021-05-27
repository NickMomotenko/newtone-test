import React from "react";

import { CounterValue, CounterWrapp } from "./styles";

import Button from "../../UI/Button";

const Counter = ({ value, incr, decr }) => {
  return (
    <CounterWrapp center>
      <CounterValue>{`${value} кг`}</CounterValue>
      <Button text="-" style={{ marginRight: 10 }} onClick={() => decr()} />
      <Button text="+" onClick={() => incr()} />
    </CounterWrapp>
  );
};

export default Counter;
