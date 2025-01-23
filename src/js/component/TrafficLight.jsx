import React, { useState } from "react";
<link rel="stylesheet" href="style.css" />
//create your first component
export const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState("orange");
    return (
        <div className="container mt-5">
            <div className="container d-table traffic-light w-auto rounded-4">
                <div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glowRed" : "")}></div>
                <div onClick={() => setSelectedColor("orange")} className={"light orange" + (selectedColor === "orange" ? " glowOrange" : "")}></div>
                <div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glowGreen" : "")}></div>
            </div>
            <div className="pole"></div>
        </div>
    );
};
export default TrafficLight;