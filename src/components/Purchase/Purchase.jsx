import TabsPanel from "../ui-kits/Tabs";
import Overview from "../Overview/Overview";
import './styles.css';

const Purchase = () => {
  const components = [
    {
      label: 'Обзор',
      children: <Overview/>,
    },
    {
      label: 'Информация',
      children: <div></div>,
    },
    {
      label: 'Структура',
      children: <div></div>,
    },
    {
      label: 'Документы',
      children: <div></div>,
    }
  ];
  return <div className='purchase-container'>
    <TabsPanel components={components} />
  </div>
}

export default Purchase;