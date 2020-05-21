var canvas3 = document.getElementById('PrograChart');
var ctx3 = canvas3.getContext('2d');

Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx;
      
      //Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var txt = centerConfig.text;
      
      //Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      
      
      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
});

// DATA CANVAS
var data = {
   
    labels: ["C#", "Java", "VB.NET", "Python"],
    datasets: [
        {
                 
            backgroundColor: ["#881113" , "#c31718", "#e22a06", "#f94d2c"],
                      
            data: [70, 65, 60, 30],
            hoverBackgroundColor: ["#93b9cc", "#28315d", "#ff9900", "#940a23"]
        }
    ]
};

var option = {
 
  cutoutPercentage: 70,
  layout: {
    padding: {
        right: 120
        
    }
  },
  legend: {
    position: 'right',
    onClick: (e) => e.stopPropagation(),
    labels: {
      usePointStyle: true,
      padding: 20
    }
  },
    elements: {
      center: {
        text: 'Programmation',
        fontStyle: 'Montserrat'
      },
      arc: {
        borderWidth: 1,
      }      
    },
    tooltips: {
      cornerRadius: 0,
      displayColors: false,
      callbacks: {
        label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var dataLabel = data.labels[tooltipItem.index];

            var currentValue = dataset.data[tooltipItem.index];
            var pourcentage = Math.floor(currentValue);         
            return dataLabel +" : "+ pourcentage + "%";
          }
          
      }
    }
};


Chart.defaults.global.defaultFontFamily = "Baukasten";
Chart.defaults.global.defaultFontColor = "black";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontStyle = "bold";
Chart.defaults.global.animation.duration = 1500;

// Initialisation du Canvas de type "Doughnut"
var myDoughnutChart = new Chart(canvas3,{
    type: 'doughnut',
    responsive: true,
    data:data,
    options:option
  });