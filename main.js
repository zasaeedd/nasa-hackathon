// const ch =  document.querySelector('#myChart').getContext("2d");
const ch =  document.getElementById('myChart').getContext("2d");

const labels = [
    'Asia', 'Africa','North America', 'South America', 'Europe', 'Australia', 'Antartica',
];

const data = {
    labels,
    datasets: [{
        label: "Number of Fires",
        data: [3000, 
            10000, 
            7000, 
            4000, 
            2000, 
            15000,
            0
        ],
        backgroundColor: [
            // 'rgba(255, 26, 104, 0.2)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)',
            // 'rgba(0, 0, 0, 0.2)'
            'rgba(255, 206, 86, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 206, 86, 0.5)',
          ],
          borderColor: [
            // 'rgba(255, 26, 104, 1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)',
            // 'rgba(0, 0, 0, 1)'

            'rgba(255, 206, 86, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1.5
        // backgroundColor: blue,
    }, 
],
};

const config = {
 type: 'bar',
 data: data,
 options: {
    responsive: true,
 },
};

const myChart = new Chart(ch, config)

const jsonFilePath = '../data/json/AUSdata.json';
