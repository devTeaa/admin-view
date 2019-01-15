import React from "react";

import "../assets/styles/index.css";

import Sidebar from "./Sidebar";

const Container = () => (
  <div className="container-with-sidebar">
    <Sidebar />
    <section>
      <h1>Container</h1>
    </section>
  </div>
);

export default Container;
