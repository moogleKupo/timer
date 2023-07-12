const delayInSecs = process.argv[2];
const timer = function (delayInSecs) {
  const delayInMs = delayInSecs * 1000;

  if (isNaN(delayInSecs) || delayInSecs === undefined || delayInSecs < 0) {
    console.log("Please enter a positive number!");
    return;
  }
  let beep = function () {
    process.stdout.write("\x07");
  };
  setTimeout(() => {
    beep();
  }, delayInMs);
};
timer(Number(delayInSecs));
