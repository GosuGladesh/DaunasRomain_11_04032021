import React from "react";
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import NotFound from "./Components/NotFound/NotFound"
import Logement from "./Components/Logement/Logement"
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
    {
        path: "/logement:id",
        component : Logement
    },
    {
        path: "**",
        component: NotFound
    }

]