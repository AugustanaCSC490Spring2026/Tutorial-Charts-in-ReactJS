import {Bar, Pie, Line} from 'react-chartjs-2'
import {Chart as ChartJS, defaults, plugins} from 'chart.js/auto'
import data from '../Data/data.json'

defaults.plugins.title.display = true;
defaults.plugins.title.color = "white";

// Used AI to help with forming animations for each graph
// Used https://www.youtube.com/watch?v=6q5d3Z1-5kQ to help with options

export const BarGraph = () => {
    const options = {
        responsive: true,
        animation: {
            duration: 1000,
            animateScale: true,
            animateRotate: true
        },
        animations: {
            y:{
                from: 0
            }
        },
        plugins: {
            title: {
                text: "Monthly Money"
            }
        }
    };
    return <Bar options={options} 
    data={{
        labels: data.map((data) => data.Label),
        datasets: [
            {
            label: "Count",
            data: data.map((data) => data.data)
            },
            {
            label: "Dollar",
            data: [90, 80, 70]
            }
        ]
    }}/>
}

export const PieGraph = () => {
    const options = {
        plugins: {
            title: {
                text: "Monthly Pie"
            }
        }
    };
    return <Pie options={options} 
    data={{
        labels: data.map((data) => data.Label),
        datasets: [
            {
            label: "Count",
            data: data.map((data) => data.data)
            }
        ]
    }}/>
}

export const LineGraph = () => {
    const options = {
        responsive: true,
        animation: {
            duration: 1000,
            animateScale: true,
            animateRotate: true
        },
        animations: {
            y: {
                from: 0
            }
        },
        plugins: {
            title: {
                text: "Monthly Money"
            }
        }
    };
    return <Line options={options} 
    data={{
        labels: data.map((data) => data.Label),
        datasets: [
            {
            label: "Count",
            data: data.map((data) => data.data)
            }
        ]
    }}/>
}