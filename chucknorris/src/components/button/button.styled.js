import styled from "styled-components";

export const ButtonStyled = styled.button`
 appearance: button;
  background-color: black;
  border: 1px solid white;
  border-radius: 50%;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.15;
  overflow: visible;
  padding: 50px 50px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 80ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  :disabled {
opacity: .5;
}
:focus {
  outline: 0;
}
:active {
  background-color: white;
  border-color: black;
  color:black;
}
`;