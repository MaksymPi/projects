import React from 'react'

export const AppLayout = ({children}) => {
  return <div>
    <header>header</header>
    <main>{children}</main>
    <footer>footer</footer>
  </div>
};
