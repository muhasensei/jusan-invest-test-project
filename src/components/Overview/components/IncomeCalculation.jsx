import '../styles.css';
import {ReactComponent as InfoCircle} from "../../../assets/svgs/infoCircle.svg";
import {useEffect, useState} from "react";
import Range from "../../ui-kits/Range/Range";
import Grid from "../../ui-kits/Grid/Grid";
import RadioButton from "../../ui-kits/RadioButton";
import {formatMoney, getReminder} from "../utils";

const IncomeCalculation = () => {

  const [investInfo, setInvestInfo] = useState({
    investSum: 10000,
    investYear: 1,
    predictedIncome: 0,
  });

  const handleRangeChange = (e) => {
    setInvestInfo({...investInfo, investSum: e.target.value});
  };

  const handleChangeInvestYear = (e) => {
    setInvestInfo({...investInfo, investYear: +e.target.value});
  }

  const calculatePredictedIncome = () => {
    let newPredictedIncome = investInfo.investYear * 1.45 * investInfo.investSum;
    setInvestInfo({...investInfo, predictedIncome: newPredictedIncome});
  };

  useEffect(() => {
    calculatePredictedIncome();
  }, [investInfo.investYear, investInfo.investSum])

  const predictedIncome = formatMoney(investInfo.predictedIncome);
  const predictedIncomeRemainder = getReminder(investInfo.predictedIncome, 2);
  return <div className='bordered-card'>
      <div className="card-header">
        <div className="card-info-title">
          <span className="card-title">
            Посчитать возможный доход
          </span>
          <InfoCircle/>
        </div>
      </div>
      <div className="card-body">
        <div className="ranger">
          <p className="title-md">
            Сумма инвестирования
          </p>
          <Range onChange={handleRangeChange} value={investInfo.investSum} min={10000} max={2000000} step={1000} />
          <p className="title-md">
            Срок инвестирования
          </p>
          </div>
          <Grid>
            <RadioButton
              label='1 год'
              checked={investInfo.investYear === 1}
              value={1}
              type='outlined'
              id='1'
              onChange={handleChangeInvestYear}
            />
            <RadioButton
              label='2 года'
              checked={investInfo.investYear === 2}
              value={2}
              type='outlined'
              id='2'
              onChange={handleChangeInvestYear}
            />
            <RadioButton
              label='3 года'
              checked={investInfo.investYear === 3}
              value={3}
              type='outlined'
              id='3'
              onChange={handleChangeInvestYear}
            />
            <RadioButton
              label='4 года'
              type='outlined'
              checked={investInfo.investYear === 4}
              value={4}
              id='4'
              onChange={handleChangeInvestYear}
            />
            <RadioButton
              label='5 лет'
              checked={investInfo.investYear === 5}
              value={5}
              type='outlined'
              id='5'
              onChange={handleChangeInvestYear}
            />
          </Grid>
          <div className="divider"/>
          <p>Предполагаемый доход</p>
          <p className="predicted-income">
            {predictedIncome}
            <span className='predicted-income-reminder'>{predictedIncomeRemainder}</span>
          </p>
      </div>
    </div>;
}

export default IncomeCalculation;