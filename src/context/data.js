import React, { useState, useEffect } from "react";

import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: 1,
    title: "Банан",
    price: 10,
    discount: false,
  },
  {
    id: 2,
    title: "Яблоки",
    price: 8,
    discount: false,
  },
  {
    id: 3,
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
    } else {
      setTotalValue(0);
    }

    function totalWithDiscount(counter, price) {
      const counterForGuaranteedDiscount = 3;
      const priceForProductWithDiscount = 25;
      let totalPurchaseAmount = 0;

      if (counter % counterForGuaranteedDiscount === 0) {
        totalPurchaseAmount +=
          (counter / counterForGuaranteedDiscount) *
          priceForProductWithDiscount;
      } else {
        let occurrenceCounter = counter / counterForGuaranteedDiscount;
        let stringFromOccurrenceCounter = occurrenceCounter.toString();
        let valueBeforeComa = Number(stringFromOccurrenceCounter.split(".")[0]);

        totalPurchaseAmount += valueBeforeComa * priceForProductWithDiscount;
        totalPurchaseAmount += (counter % counterForGuaranteedDiscount) * price;
      }

      return totalPurchaseAmount;
    }
  }, [busket]);

  const addToBusket = (item) => {
    let isProductInBusket = busket.find((x) => x.id === item.id);

    if (isProductInBusket) {
      let arr = busket.map((busketItem) => {
        if (busketItem.id === isProductInBusket.id) {
          busketItem.value = isProductInBusket.value + item.value;
        }

        return busketItem;
      });

      setBusket(arr);
    } else {
      setBusket([...busket, item]);
    }
  };

  const deleteItemFromBusket = (id) => {
    setBusket(busket.filter((item) => item.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        busket,
        addToBusket,
        deleteItemFromBusket,
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
