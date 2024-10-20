function getRandomColor(hexColor) {
  const colors = ["#FF5733", "#33FF57", "#883982"];
  const names = ["x", "o"];
  const grow = ["100px", "20px", "30px", "200px"];
  if (hexColor) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const nameIndex = Math.floor(Math.random() * names.length);
    const growIndex = Math.floor(Math.random() * grow.length);
    let output = {
      fontsizer: grow[growIndex],
      color: colors[randomIndex],
      name: names[nameIndex],
    };

    return output;
  }
}

export default getRandomColor;
