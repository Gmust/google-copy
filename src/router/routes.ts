import React from "react";
import Login from "../components/login/Login";
import Password from "../components/password/Password";
import ErrorPage from "../components/error/ErrorPage";


export interface IRoute{
    path:string;
    elements: React.ComponentType,
};


export enum RouteNames{
LOGIN='/',
PASSWORD ='/password',
ERROR = '/error',
};

export const publicRoutes:IRoute[]=[
    {path: RouteNames.LOGIN, elements:Login},
    {path: RouteNames.PASSWORD, elements:Password},
    {path: RouteNames.ERROR, elements:ErrorPage}
]

