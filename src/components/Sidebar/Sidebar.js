import React from "react";
import Nav from "./Nav/Nav";
import Social from "./Social/Social";

function Sidebar() {
  return (
    <div className="sidebar">
      <Nav />
      <Social />
    </div>
  );
}

export default Sidebar;
