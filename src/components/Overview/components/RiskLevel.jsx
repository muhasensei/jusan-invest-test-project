import '../styles.css';

const RiskLevel = () => (
  <div className='gray-bg-card'>
    <div className="card-header">
      <span className="card-title">Уровень риска</span>
    </div>
    <div className="card-body">
      <div className="row">
        <ul className="risk-levels">
          <li className="level active-level"/>
          <li className="level"/>
          <li className="level"/>
          <li className="level"/>
          <li className="level"/>
        </ul>
        <div className="risk-description">
          <p>Низкий риск; <br/>Консервативня доходность</p>
        </div>
      </div>
    </div>
  </div>
);

export default RiskLevel;