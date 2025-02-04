import React, { useContext } from "react";
import { themeContext } from "..";
export default function Footer(props) {
  const [Theme,setTheme] = useContext(themeContext);
  const textColor = Theme === "dark" ? "white" : "black";
  
  return (
    <div>
      <footer className="bg-body-tertiary text-center text-lg-start">
        <div
          className={`text-center p-3 bg-${Theme}`}
          style={{ color: textColor }}
        >
          <p>&copy;Copyright. All rights are reserved. </p>
          <a
            href="https://sundhucomputing.wordpress.com/"
            style={{ color: textColor }}
          >
            sundhucomputing.com
          </a>
        </div>
      </footer>
    </div>
  );
}
