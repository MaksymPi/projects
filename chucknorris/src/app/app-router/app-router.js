import React from 'react';
import {useRoutes} from "react-router-dom";
import { ROUTES } from '../../constants/routes';



export const AppRouter = () => {
    const routes = useRoutes([
        {path: ROUTES.undefined, element: <div>page not found</div>},
        { path: ROUTES.main, element: <div>main</div>},
        { path: ROUTES.favorite,  element: <div>test</div>},
    ]);
  return routes;
}
