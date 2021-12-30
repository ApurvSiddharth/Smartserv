var canvasElement = document.getElementById('chart1');
var canvasElement2 = document.getElementById('chart2');

var config={
    type: 'bar',
    data: {
        labels: ["Data 1","Data 2","Data 3"],
        datasets: [
            {
            label: "Sample-Chart", 
            data:[2,10,8]
            }
        ]
    }
};

var config2={
    type: 'bar',
    data: {
        labels: ["Data 1","Data 2","Data 3"],
        datasets: [
            {
            label: "Sample-Chart", 
            data:[3,4,10]
            }
        ]
    }
};

var myChart = new Chart(canvasElement,config);
var myChart2 = new Chart(canvasElement2,config2);
