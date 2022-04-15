import Graph from "../../ui-kits/Graph/Graph";
import {useEffect, useState} from "react";
import '../styles.css';
import RadioButton from "../../ui-kits/RadioButton";
import Grid from "../../ui-kits/Grid/Grid";
import {formatPricesData, getRangedApi} from "../utils";
import {ReactComponent as ArrowUp} from '../../../assets/svgs/arrowUp.svg';

const PricesGraph = () => {
  const [investData, setInvestData] = useState({
    min: 0,
    max: 0,
    graph: []
  });
  const [selectedPeriod, setSelectedPeriod] = useState('oneWeek')
  const handleChangePeriod = (e) => {
    setSelectedPeriod(e.target.value)
  }
  const fetchInvestData = async () => {
    try {
      (await fetch(getRangedApi(selectedPeriod))).json().then((res) => {
        setInvestData(res)
      });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchInvestData();
  }, [selectedPeriod])


  const formattedPricesData = formatPricesData(investData.graph);

  return <div>
      <div className="price-general-info">
        <p className='graph-current-price'>$1 038.29</p>
        <div className='predicted-price'>
          <ArrowUp/>
          <p className='graph-predicted-raise'>
            $48.69 (4.69%)</p>
        </div>
      </div>
      <Graph yMin={investData.min} yMax={investData.max} data={formattedPricesData} />
      <div className='graph-navigation'>
        <div className="divider"/>
        <div className="navigation-buttons">
          <Grid>
            <RadioButton
              label='1 неделя'
              checked={selectedPeriod === 'oneWeek'}
              value='oneWeek'
              id='oneWeek'
              onChange={handleChangePeriod}
            />
            <RadioButton
              label='2 недели'
              checked={selectedPeriod === 'twoWeeks'}
              value='twoWeeks'
              id='twoWeeks'
              onChange={handleChangePeriod}
            />
            <RadioButton
              label='1 месяц'
              checked={selectedPeriod === 'oneMonth'}
              value='oneMonth'
              id='oneMonth'
              onChange={handleChangePeriod}
            />
          </Grid>
        </div>
      </div>
    </div>;
};

export default PricesGraph;


