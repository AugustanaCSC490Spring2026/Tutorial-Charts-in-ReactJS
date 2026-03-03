
import './App.css'
import { BarGraph, PieGraph, LineGraph } from './components/Bar'
import React, {useState} from 'react';

// AI helped add buttons/useState hook so we can track which graph to show

function App() {
  const [chartO, setChart] = useState(<BarGraph />)

  function updateChart(type) {
    if (type === 'bar') {
      setChart(<BarGraph />)
    } else if (type === 'pie') {
      setChart(<PieGraph />)
    } else {
      setChart(<LineGraph />)
    }
  }

  return (
    <>
      <div className="App">
        {chartO}
      </div>

      <div>
        <button onClick={() => updateChart('bar')}>Bar</button>
        <button onClick={() => updateChart('line')}>Line</button>
        <button onClick={() => updateChart('pie')}>Pie</button>
      </div>
    </>
  )
}

export default App
