import '../styles.css';
import {ReactComponent as InfoCircle} from "../../../assets/svgs/infoCircle.svg";

const FundIncomeRate = () => (
  <div className='gray-bg-card'>
    <div className="card-header">
      <div className="card-info-title">
          <span className="card-title">
            Доходность фонда
          </span>
          <InfoCircle/>
      </div>
      <span className="card-subtitle">
        В годовых
      </span>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="row-item">
          <p className='item-name'>YTD</p>
          <p className='item-value'>1.41%</p>
        </div>
        <div className="row-item">
          <p className='item-name'>6 мес.</p>
          <p className='item-value'>4.69%</p>
        </div>
        <div className="row-item">
          <p className='item-name'>1 год</p>
          <p className='item-value'>1.45%</p>
        </div>
        <div className="row-item">
          <p className='item-name'>Весь период</p>
          <p className='item-value'>1.89%</p>
        </div>
      </div>
    </div>
  </div>
);

export default FundIncomeRate;