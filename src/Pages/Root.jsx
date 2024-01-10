import React, { Fragment } from "react";
import { Header } from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import { Cursor } from "../Components/Cursor/Cursor";

export const Root = () => {
  return (
    <Fragment>
      <Cursor />
      <Header />
      <Outlet />
    </Fragment>
  );
};
