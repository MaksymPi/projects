import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppLayoutStyled = {
  Wrapper: styled.div`
    min-height: 100vh;
    max-width: 1280px;
    min-width: 375px;

    padding: 0 0px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color:#D1D1D1;
  `,
  Header: styled.header`
    width: 100%;

    padding: 16px 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color:white;
    border-bottom: 1px solid black;
  `,
  Footer: styled.footer``,
  Logo: styled.img`
    width: 62px;
    height: 62px;
  `,
  Nav: styled.nav`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 16px;
  `,
  Link: styled(Link)`
    text-decoration: none;

    font-size: 24px;
    text-transform: uppercase;
    color: black;

    transition-property: all;
transition-duration: 0.5s;
transition-delay: 0s;
transition-timing-function: cubic-bezier(0.68,-0.55,0.265,1.55);


    :hover {
      text-decoration: underline;
      font-size: 26px;

    }
  `,
  Email: styled.a``,
};
