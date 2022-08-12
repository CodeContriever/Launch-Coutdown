
// Set the date we're counting down to
const countDownDate = new Date("Aug 31, 2022 15:37:25").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".day").innerHTML = days + "d ";
  document.querySelector(".hour").innerHTML = hours + "h ";
  document.querySelector(".day").innerHTML = days + "d ";
  document.querySelector(".minute").innerHTML = minutes + "m ";
  document.querySelector(".second").innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".counter").innerHTML = '<p style="display:block;margin:0 auto;text-align:center;font-size:3rem;color:hsl(345, 95%, 68%);">WE ARE LIVE NOW!</p>';
    
  }
}, 1000);