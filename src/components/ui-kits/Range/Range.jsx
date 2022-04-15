import './styles.css';
import {formatMoney} from "../../Overview/utils";

const Range = ({min, max, step, ...inputProps}) => {
  return <div className='range-container'>
    <p className="invest-sum">
      {formatMoney(inputProps.value)}
    </p>
    <input type="range" min={min} max={max} step={step} {...inputProps} />
    <div className="range-labels">
      <p>{formatMoney(min)}</p>
      <p>{formatMoney(max)}</p>
    </div>
  </div>
};

export default Range;
