import React from "react";

const Popup = ({ title, description, description2, image, hours }) => {
  return (
    <div className="popup-container">
      <div className="popup-title">{title}</div>
      <div className="popup-hours">{hours}</div>
      <div className="popup-image">
        <img src={image} alt={title} />
      </div>
      <div className="popup-description">{description}</div>
      <div className="popup-description">{description2}</div>
    </div>
  );
};

export default Popup;