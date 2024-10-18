import React from "react";



function getRandomColor(hexColor, colorArray, names) {
  // Check if the input color has changed
  if (hexColor) {
    // Generate a random index to select a color from the array
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    const nameIndex = Math.floor(Math.random() * names.length);
    let output = { color: colorArray[randomIndex], name: names[nameIndex] };

    return output;
  }
}

export default getRandomColor;
