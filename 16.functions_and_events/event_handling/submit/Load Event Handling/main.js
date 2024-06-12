function startClock() {
  const clockElement = document.getElementById("clock");

  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const day = now.getUTCDate().toString().padStart(2, "0");
    const month = now.getUTCMonth() + 1;
    let umonth = month.toString().padStart(2, "0");
    const year = now.getFullYear();
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const formdate = ` ${day}/${umonth}/${year}`;
    clockElement.innerHTML = `${formattedTime}  <br></br>  ${formdate}`;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);
  // Initial update
  updateClock();
}
