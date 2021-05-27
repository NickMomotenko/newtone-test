import React, { useState } from "react";

export const useCounter = () => {
  const [value, setValue] = useState(1);

  const incr = () => {
    setValue((prev) => prev + 1);
  };

  const decr = () => {
    setValue((prev) => {
      if (value === 1) {
        return 1;
      } else {
        return value - 1;
      }
    });
  };

  return { value, incr, decr };
};
