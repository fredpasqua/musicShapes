function getRandomColor(hexColor, colorArray, names, sizes) {
  if (hexColor) {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    const nameIndex = Math.floor(Math.random() * names.length);
    const sizeIndex = Math.floor(Math.random() * sizes.length);
    let output = {
      color: colorArray[randomIndex],
      name: names[nameIndex],
      size: sizes[sizeIndex],
    };

    return output;
  }
}

export default getRandomColor;
