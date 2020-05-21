var canvas2 = document.getElementById('BackChart');
var ctx2 = canvas2.getContext('2d');

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
   
    labels: ["PHP", "SQL", "PostgreSQL/MySQL", "Elasticsearch", "JSON/XML"],
    datasets: [
        {
                 
            backgroundColor: ["#004e69", "#006081", "#009094", "#00ada7", "#00c3bd"],
                      
            data: [75, 70, 65, 40, 45],
            hoverBackgroundColor: ["#93b9cc", "#28315d", "#ff9900", "#940a23", "#cc5555"]
        }
    ]
};

var option = {
 layout: {
   padding :{
    right: 10
   }
 },

  cutoutPercentage: 70,
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
        text: 'Back-End',
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
            return dataLabel +" : " + pourcentage + "%";
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
var myDoughnutChart = new Chart(canvas2,{
    type: 'doughnut',
    responsive: true,
    data:data,
    options:option
  });