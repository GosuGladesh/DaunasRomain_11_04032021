import React from "react";
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = [

    {
        path: "/",
        component: Home
    },
    {
        path: "/apropos",
        component: About
    },

]