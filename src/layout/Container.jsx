import React, { Component } from "react";

import "../assets/styles/index.css";

import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import HeadSection from "./HeadSection";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      viewMobile: false,
      menuStateOpen: false
    };

    this.resizeFunction = this.resizeFunction.bind(this);
  }

  componentDidMount() {
    this.resizeFunction();
    window.addEventListener("resize", this.resizeFunction);
  }

  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ viewMobile: false, menuStateOpen: true });
    } else {
      this.setState({ viewMobile: true, menuStateOpen: false });
    }
  }

  render() {
    const { viewMobile, menuStateOpen } = this.state;

    return (
      <div
        className={
          viewMobile && menuStateOpen
            ? "container-with-sidebar hide-sidebar"
            : "container-with-sidebar"
        }
      >
        <Sidebar />
        <section>
          <HeadSection />
          <MainSection />
        </section>
      </div>
    );
  }
}

export default Container;
