import { generatePath } from "react-router-dom"
import { Routes, SwitchRoutes } from "./router";

export const switchRoutes: SwitchRoutes = {
    root: "/",
    detail: "/list/:login",
    rickAndMorty: "/rick-and-morty/list"
};

export const routes: Routes = {
    ...switchRoutes,
    detail: (login: string) => generatePath(switchRoutes.detail, { login: login })
};