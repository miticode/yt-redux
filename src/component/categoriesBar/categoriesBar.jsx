import React, { useState } from "react";
import "./categoriesBar.scss";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../redux/actions/video.action";

const keywords = [
  "All",
  "FPS games",
  "Tiktok remix",
  "Leauge of Legends",
  "Pubg",
  "Killerqueen",
  "Bóng Đá",
  "FPT University",
  "Bên anh đêm nay remix",
  "Song Kang",
  "Harry Lu",
  "Redux",
  "Tris"
];
const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    dispatch(getVideosByCategory(value));
  };

  return (
    <div className="CategoriesBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
