import React from "react";

import styled from "styled-components";

const ColumnWrapp = styled.div``;

const BlockWrapp = styled.div``;

const RowWrapp = styled.div`
  display: flex;

  ${(props) => props.center && `align-items:center`};
  ${(props) => props.btw && `justify-content:space-between`};
`;

export const Column = ({ children, ...props }) => {
  return <ColumnWrapp {...props}>{children}</ColumnWrapp>;
};

export const Row = (props) => {
  return <RowWrapp {...props}>{props.children}</RowWrapp>;
};

export const Block = ({ children, ...props }) => {
  return <BlockWrapp {...props}>{children}</BlockWrapp>;
};
