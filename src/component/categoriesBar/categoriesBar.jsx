import React, { useState } from "react";
import "./categoriesBar.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React native",
  "use of Api",
  "Redux js",
  "Musix",
  "ALPHA js",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
  "Bengali Songs",
];
const CategoriesBar = () => {
  
  const [activeElement, setActiveElement] = useState("All");
 
  const handleClick = (value) => {
    setActiveElement(value);
   
  };
  
  return (
    <div className="CategoriesBar">
      {keywords.map((value, i) => (
        <span onClick={() => handleClick(value)} key={i} className={activeElement=== value?'active':''}>
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
