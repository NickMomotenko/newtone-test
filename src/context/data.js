import React, { useState, useEffect } from "react";

import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    title: "Банан",
    price: 10,
    discount: false,
  },
  {
    id: uuid(),
    title: "Яблоки",
    price: 8,
    discount: false,
  },
  {
    id: uuid(),
    title: "Папайа",
    price: 10,
    discount: true,
  },
];

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  const [busket, setBusket] = useState([]);

  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    if (busket.length) {
      let total = 0;
      let itemWithDiscount = busket.find((item) => item.discount === true);

      if (itemWithDiscount) {
        let { value, price } = itemWithDiscount;
        total += totalWithDiscount(value, price);
      }

      busket.forEach((item) => {
        if (item !== itemWithDiscount) total += item.value * item.price;
      });

      setTotalValue(total);
    }

    function totalWithDiscount(counter, price) {
      const num = 3;
      const priceForNum = 25;
      let totaln = 0;

      if (counter % num === 0) {
        totaln += (counter / num) * priceForNum;
      } else {
        let x = counter / num;
        let str = x.toString();
        let beforeComa = Number(str.split(".")[0]);

        totaln = totaln + beforeComa * priceForNum;
        totaln = totaln + (counter % num) * price;
      }

      return totaln;
    }
  }, [busket]);

  const addToBusket = (item) => {
    let prod = busket.find((x) => x.id === item.id);

    if (prod) return;

    setBusket((prev) => [...prev, item]);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        busket,
        addToBusket,
        totalValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const withData = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <DataContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </DataContext.Consumer>
      );
    }
  };
};
