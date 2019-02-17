//Linechart JS code
window.onload = function () {

		var dps = []; // dataPoints
		var chart = new CanvasJS.Chart("chartContainer", {
			backgroundColor: "transparent",
			/*width: 700,*/
			data: [{
				type: "line",
				dataPoints: dps,
				lineColor: "#6A679E",
				markerColor: "#6A679E",
				lineThickness: "4",
			}]
		});

		var xVal = 0;
		var yVal = 0; 
		var updateInterval = 1000;
		var dataLength = 10; // number of dataPoints visible at any point

		var updateChart = function (count) {

			count = count || 2;

			for (var j = 0; j < count; j++) {
				yVal = yVal + Math.round(1500 + Math.random() *(-5-5));
				dps.push({
					x: xVal,
					y: yVal
				});
				xVal++;
			}

			if (dps.length > dataLength) {
				dps.shift();
			}

			if (yVal == 40000){
				
			}
			
			chart.render();	
		};
		updateChart(dataLength);
		setInterval(function(){updateChart()}, updateInterval);
}

//COUNTDOWN CLOCK Js code	
// Set the date we're counting down to
//I set the date to 2019 because if I set it to 2030 It would count from todays date, and if I would set two vast dates the timer wouldn't be dynamic
var countDownDate = new Date("Dec 28, 2019 03:19:97").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="time"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);