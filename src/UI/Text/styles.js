import styled from "styled-components";

export const TextWrapp = styled.div`
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
  color: ${(props) => props.color || "#1B1D28"};
  font-weight: ${(props) => (props.weight ? `${props.weight}` : "400")};

  ${(props) => props.bold && `font-weight:700`}
`;
