const fs = require("fs");
const ACCESS_LOG = "./access.log";

let firstIp = "89.123.1.41";
let secondIp = "34.48.240.111";

const readStream = fs.createReadStream(ACCESS_LOG, {
  flags: "r",
  highWaterMark: 1024,
  encoding: "utf-8",
});

readStream.on("data", (chunk) => {
  let chunkString = chunk.toString();
  let chunkSplit = chunkString.split(/\r?\n/);
  chunkSplit.forEach((line) => {
    if (line.includes(firstIp)) {
      fs.appendFile(`./${firstIp}_requests.log`, line, (err) =>
        console.log(err)
      );
      fs.appendFile(`./${firstIp}_requests.log`, "\n", (err) =>
        console.log(err)
      );
    }
    if (line.includes(secondIp)) {
      fs.appendFile(`./${secondIp}_requests.log`, line, (err) =>
        console.log(err)
      );
      fs.appendFile(`./${secondIp}_requests.log`, "\n", (err) =>
        console.log(err)
      );
    }
  });
});

readStream.on("end", () => console.log("Finished!"));
