export default class Time {
  constructor(onTick) {
    this.onTick = onTick; // callback to HUD
    this.time = 0;
    this.interval = null;
  }

  start() {
    if (this.interval) return;

    this.interval = setInterval(() => {
      this.time++;
      this.onTick(this.time);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset() {
    this.stop();
    this.time = 0;
    this.onTick(this.time);
  }
}



// //Initial Time
// let seconds = 0,
//   minutes = 0;
// //Initial moves and win count
// let movesCount = 0,
//   winCount = 0;

// //For timer
// const timeGenerator = () => {
//   seconds += 1;
//   //minutes logic
//   if (seconds >= 60) {
//     minutes += 1;
//     seconds = 0;
//   }
//   //format time before displaying
//   let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
//   let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
//   timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
// };
