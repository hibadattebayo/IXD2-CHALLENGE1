//Linechart JS code
window.onload = function () {

		var dps = []; // dataPoints
		var chart = new CanvasJS.Chart("chartContainer", {
			axisY: {
				includeZero: false
			},      
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
		fontName: 'PT sans'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
    }