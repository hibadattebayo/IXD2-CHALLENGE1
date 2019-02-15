//Linechart JS code
window.onload = function () {

		var dps = []; // dataPoints
		var chart = new CanvasJS.Chart("chartContainer", {
			backgroundColor: "transparent",
			/*width: 700,*/
			data: [{
				type: "line",
				dataPoints: dps,
				lineColor: "#f88e56",
				markerColor: "#f88e56",
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
		
// Pie chart JS code
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Women', 51],
        ['Men', 40],
        ['Other', 12]
    ]);

    var options = {
        colors: ['#A71D31', '#6A679E', '#5F4B66'],
		backgroundColor: { fill:'transparent' },
		fontName: 'PT sans',
		//This hides the legend
		legend:'none',
		//This centers the chart!! v
		chartArea:{left:10,top:20,width:"100%",height:"100%"}
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
    }
	
// Set the date we're counting down to
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