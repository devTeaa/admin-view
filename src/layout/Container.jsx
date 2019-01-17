import React, { Component } from "react";

import "../assets/styles/index.css";

import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import HeadSection from "./HeadSection";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false,
      menuStateOpen: false
    };

    this.resizeFunction = this.resizeFunction.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  componentDidMount() {
    this.resizeFunction();
    window.addEventListener("resize", this.resizeFunction);
  }

  resizeFunction() {
    const { isMobile } = this.state;
    if (window.innerWidth >= 960) {
      if (isMobile) {
        this.setState({ isMobile: false, menuStateOpen: true });
      }
    } else {
      this.setState({ isMobile: true, menuStateOpen: false });
    }
  }

  toggleSideBar() {
    const { menuStateOpen } = this.state;
    this.setState({ menuStateOpen: !menuStateOpen });
  }

  render() {
    const { menuStateOpen } = this.state;

    return (
      <div
        className={
          menuStateOpen
            ? "container-with-sidebar"
            : "container-with-sidebar hide-sidebar"
        }
      >
        <Sidebar toggleSideBar={this.toggleSideBar} />
        <section>
          <HeadSection />
          <MainSection />
        </section>
      </div>
    );
  }
}

export default Container;
