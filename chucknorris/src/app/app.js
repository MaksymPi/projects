import { BrowserRouter } from "react-router-dom";

import { AppLayout } from "./app-layout/app-layout";
import { AppRouter } from "./app-router/app-router";

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </BrowserRouter>
  );
};
