import React from 'react';
import {useRoutes} from "react-router-dom";

import { ROUTES } from '../constants/routes';


export default function AppRouter() {
    const routes = useRoutes([
        { path: ROUTES.main, element: <div>main</div>},
        { path: ROUTES.favorite,  element: <div>test</div>},
    ]);
  return routes;
}
