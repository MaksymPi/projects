import React from "react";

import { AppLayoutStyled as styled } from "./app-layout.styled";
import { ROUTES } from "../../constants/routes";

export const AppLayout = ({ children }) => {
  return (
    <styled.Wrapper>
      <styled.Header>
        <styled.Logo src='https://passion-stickers.com/1455-home_default/decals-chuck-norris.jpg'/>
        <styled.Nav>
          <styled.Link to={ROUTES.main}>main</styled.Link>
          <styled.Link to={ROUTES.favorite}>favorite</styled.Link>
        </styled.Nav>
      </styled.Header>
      <main>{children}</main>
      <styled.Footer>
       <styled.Email href="https://api.chucknorris.io/" > chucknorris.io </styled.Email>
        </styled.Footer>
    </styled.Wrapper>
  );
};
