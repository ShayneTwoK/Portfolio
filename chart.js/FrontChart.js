var canvas = document.getElementById('FrontChart');
var ctx = canvas.getContext('2d');

let gradientBlue = ctx.createLinearGradient(0, 0, 0,200);
gradientBlue.addColorStop(0, '#5162b9');
gradientBlue.addColorStop(1, '#28315d');
// hover : #28315d
let gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
gradientGreen.addColorStop(0, '#00cc66');
gradientGreen.addColorStop(1, '#006600');
// hover : #006600
let gradientYellow = ctx.createLinearGradient(0, 0, 0, 400);
gradientYellow.addColorStop(0, '#ccff33');
gradientYellow.addColorStop(1, '#ff9900');
// hover : #ff9900
let gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
gradientOrange.addColorStop(0, '#ff9900');
gradientOrange.addColorStop(1, '#ff0000');
// hover : #ff0000
let gradientGrey = ctx.createLinearGradient(0, 0, 0, 400);
gradientGrey.addColorStop(0, '#d9dedb');
gradientGrey.addColorStop(1, 'black');
// hover : #0d4636
let gradientGreyBlue = ctx.createLinearGradient(0, 0, 0, 400);
gradientGreyBlue.addColorStop(0, 'white');
gradientGreyBlue.addColorStop(1, '#607d8b');
// hover : #93b9cc

//Espace entre la légende cacher et le titre
// marche comme un padding-bottom
Chart.Legend.prototype.afterFit = function() {
  this.height = this.height + 20;
};

// DATA CANVAS
var data = {
   
    labels: ["HTML", "CSS", "Javascript", "Vue.js", "JQuery", "Bootstrap"],
    datasets: [
        {
                 
          backgroundColor: [gradientBlue, gradientGreyBlue, gradientYellow, gradientGreen, gradientOrange,
             gradientGrey],
                      
            data: [85, 80, 45, 30, 60, 75],
            hoverBackgroundColor: ["#28315d", "#93b9cc", "#ff9900", "#006600", "#ff0000",
           "#0d4636"]
        }
    ]
};
// OPTION DU CANVAS
var option = {

  layout: {
    padding: {
      top: 20,
      right: 20
    }
  },
  title: {
    display: true,
    text: "Front-End",
    fontSize: 22,
    padding: 10
  },
  tooltips: {  
      yAlign: 'bottom',
      xAlign: 'center',
      xPadding: 12,
      yPadding: 10,
      cornerRadius: 0,
      backgroundColor: "white",      
      titleFontSize: 16,
      titleFontColor: 'black',
      bodyAlign: 'center', 
      bodyFontColor: '#000',
      bodyFontFamily: "BaukastenBold",
      bodyFontSize: 20,
      displayColors: false,
      caretPadding: 10,

    callbacks: {
      label: function(tooltipItem, data) {
        	var dataset = data.datasets[tooltipItem.datasetIndex];
          
          var currentValue = dataset.data[tooltipItem.index];
          var pourcentage = Math.floor(currentValue);         
          return pourcentage + "%";
        }
        
    }
  
  },

  // enlève la légende
  legend: {
    display: false
  },
	scales: {
  	yAxes:[{
      scaleLabel: {
        
        display: true,
        fontSize: 15,
        labelString: 'MAITRISE',
        
      },
        stacked: true,
        ticks: {
          // affiche 0, 20, 40, 60, 80, 100 axe Y
          max: 100,
          min: 0,
          fontSize: 18,
          stepSize: 20,
          padding: 15,

        },
          gridLines: {
            display: true,
            borderDash: [2, 4],
            drawTicks: false,
            zeroLineWidth: 1,
            zeroLineColor: "black",
            color: "gray",
            
          }
    }],
    xAxes:[{ 
      
      barThickness: 40,
        ticks: {
          padding: 10,
          fontSize: 20,
        },
          gridLines: {
            display: false,

          }
    }]
  }
};


Chart.defaults.global.defaultFontFamily = "Baukasten";
Chart.defaults.global.defaultFontColor = "black";
Chart.defaults.global.defaultFontSize = 18;
canvas.height = 230;
Chart.defaults.global.animation.duration = 1500;

// Initialisation du Canvas de type "Bar"
var myBarChart = new Chart(canvas,{
  type: 'bar',
  responsive: true,
	data:data,
  options:option
});