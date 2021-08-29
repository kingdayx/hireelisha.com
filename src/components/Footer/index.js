import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon className="" icon={faCopyright} />
      <div className=""> Created by Elisha Day</div>
    </div>
  );
}
