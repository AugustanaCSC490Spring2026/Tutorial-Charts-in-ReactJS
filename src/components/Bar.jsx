import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import data from '../Data/data.json'

export const BarGraph = () => {
    const options = {};
    return <Bar options={options} 
    data={{
        labels: data.map((data) => data.Label),
        datasets: [
            {
            label: "Count",
            data: data.map((data) => data.data)
            }
        ]
    }
}/>
}