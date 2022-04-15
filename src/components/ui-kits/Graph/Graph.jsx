import LineChart from 'react-linechart';
import './styles.css';

const Graph = ({color= '#193048', data, yMin, yMax}) => {
  const graphData = [
      {
          color,
          points: data
      }
  ];
  return <>
    <div className="graph">
      <LineChart
        width={250}
        height={200}
        data={graphData}
        hideXAxis
        hideYAxis
        isDate
        hidePoints
        yMin={yMin}
        yMax={yMax}
      />
    </div>
  </>
}

export default Graph;