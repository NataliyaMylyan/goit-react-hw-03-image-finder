import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import s from "./Loader.module.css";

const applyLoader = () => (
  <Loader
    className={s.Loader}
    type="Grid"
    color="#00BFFF"
    height={80}
    width={80}
  />
);

export default applyLoader;
