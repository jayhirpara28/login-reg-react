import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
;

export const Layout = () => {
  return (
    <>
    <CssBaseline/>
      <Navbar/>
      <Outlet />
    </>
  );
};
