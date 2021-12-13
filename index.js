const color = require("colors");

function timer(day, mon, year, hour = 0, min = 0, sec = 0) {
  if (
    !(
      typeof day === "number" &&
      typeof mon === "number" &&
      typeof year === "number"
    )
  ) {
    console.log("Incorrect Data!".red);
  } else {
    let endDate = new Date(
      `${mon} ${day}, ${year} ${hour}:${min}:${sec}`
    ).getTime();

    let timer = setInterval(function () {
      let now = new Date().getTime();
      let t = endDate - now;

      if (t >= 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        console.clear();
        console.log(
          `Remaining time: ${days} Days, ${hours} Hours, ${mins} Minutes, ${secs} Seconds`
        );
      } else {
        console.clear();
        clearInterval(timer);
        console.log("The countdown is over!".green);
      }
    }, 1000);
  }
}
timer(13, 12, 2021, 20, 32, 2);
