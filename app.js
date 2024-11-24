
const data = {
    labels: ['Ferrari', 'Lamborghini', 'Porsche', 'Bugatti', 'McLaren'],
    datasets: [{
        label: 'Number of Votes',
        data: [50, 45, 35, 30, 25], 
        backgroundColor: 'skyblue',
        borderColor: 'blue', 
        borderWidth: 1
    }]
};


const config = {
    type: 'bar', 
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Favorite Sports Cars Based on Votes'
            },
            legend: {
                display: true
            }
        }
    }
};


const myChart = new Chart(document.getElementById('myChart'), config);