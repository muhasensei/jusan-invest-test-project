import './styles.css';
import RiskLevel from "./components/RiskLevel";
import FundIncomeRate from "./components/FundIncomeRate";
import IncomeCalculation from "./components/IncomeCalculation";
import OverviewFooter from "./components/OverviewFooter";
import PricesGraph from "./components/PricesGraph";

const Overview = () => {
  return <>
    <div className='overview-container'>
        <PricesGraph/>
        <RiskLevel/>
        <FundIncomeRate/>
        <IncomeCalculation/>
        <OverviewFooter />
    </div>;
  </>
};

export default Overview;