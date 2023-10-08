// const ch = document.querySelector('#myChart').getContext("2d");

// function createChart(data) {
const ch = document.getElementById('myChart').getContext("2d");

async function CountFires(jsonPath) {
    try {
        const response = await fetch(jsonPath);
        const data = await response.json();

        // Check if data is an array
        if (Array.isArray(data)) {
            return data.length;
        } else {
            console.error('JSON data is not an array.');
            return -1;
        }
    } catch (error) {
        console.error('Error fetching JSON:', error);
        return -1;
    }
}

// Example usage:
const AUS = 'data/AUSdata.json';  // Replace with the actual path
const BRA = 'data/BRAdata.json';
const USA = 'data/USAdata.json';
const VIIRS = 'data/VIIRS.json';

// Use async/await to wait for the data before creating the chart
async function initializeChart() {
    const countA = await CountFires(AUS);
    const countB = await CountFires(BRA);
    const countC = await CountFires(USA);
    const countD = await CountFires(VIIRS);

    const labels = [
        'Australia', 'Brazil', 'USA', 'Other'
    ];

    const data = {
        labels,
        datasets: [{
            label: "Number of Fires",
            data: [
                countA,
                countB,
                countC,
                countD,
            ],
            backgroundColor: [
                'rgba(255, 206, 86, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1.5
        }],
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
        },
    };

    const myChart = new Chart(ch, config);
}

// Call the function to initialize the chart
initializeChart();
