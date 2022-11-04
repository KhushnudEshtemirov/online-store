import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 120px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const SpanStyles = styled.span`
  font-size: 18px;
  margin: 100px auto;
`;
