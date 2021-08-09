var xValues = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var yValues = [7.5,8,8,9,9,9,10,8.5,9,14,14.5,11];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "rgba(255, 103, 0)",
      borderColor: "rgba(255, 103, 0)",
      radius: 5,
      data: yValues,
      label: 'Earnings'
    }]
  },
  options: {
    tension: 0.5,
    borderWidth: 1,
    plugins: {
      legend: {
          display: true,
          labels: {
              boxWidth: 10,
              boxHeight: 10
          }
      }
    },

  }

});


var xValues = ["GR 6748 17", "GR 6748 17", "GR 6748 17","GR 6748 17"];
var yValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var schedule = [10,2,18,8];
var completed = [4,12,6,19];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "#52b3ef",
      borderColor: "#52b3ef",
      data: schedule,
      label: 'Scheduled'
    },
    {
      backgroundColor: "#77d1a4",
      borderColor: "#77d1a4",
      tension: -1,
      data: completed,
      label: 'Completed'
    }]
  },
  options: {
    plugins: {
      legend: {
          display: true,
          labels: {
              boxWidth: 10,
              boxHeight: 10
          }
      }
    }
    
  }

});









