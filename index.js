const colors = require("colors");

function prime(start, end) {
  if (!(typeof start === "number" && typeof end === "number")) {
    console.log(colors.red("Error: The range must be a number!"));
  }

  const arrColors = ["red", "yellow", "green"];
  let tempNum = 0;

  nextPrime: for (let i = start; i <= end; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        continue nextPrime;
      }
    }

    console.log(`${i}`[arrColors[tempNum]]);
    if (tempNum === 2) {
      tempNum = 0;
    } else {
      tempNum++;
    }
  }
}

prime(2, 500);
