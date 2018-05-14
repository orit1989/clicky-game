import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div>
  <ul className="nav nav-pills nav-justified">
      <li><a href="/">Lord of The Rings</a></li>
      <li  className={props.message.indexOf('Oops') !== -1 ? 
                    "wrong" : 
                    props.message.indexOf('Nice') !== -1 ?
                    "right" :
                    props.message.indexOf('Great') !== -1 ?
                     "win" :
                    "start"}>{props.message}</li>
      <li>Score: <span>{props.currentScore}</span> | Top Score: {props.topScore}</li>
  </ul>
  </div>
);

export default Navbar;

