import React from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="./about">About</NavLink>
        </li>
        <li>
          <NavLink to="./head">Head&Tail</NavLink>
        </li>
      </ul>
    </div>
  );
}
