import React, {useState} from 'react';
import './styles.css';
const TabsPanel = function({components}) {

  const [value, setValue] = useState(0);

  const handleClick = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className='tabs-container'>
      <div className='tabs'>
        {components.map((component, i) => (
          <button className={`tab ${(value === i && 'active-tab')}`}  onClick={() => handleClick(i)} key={i}>
            <p className='tab-label'>
              {component.label}
            </p>
          </button>
        ))}
      </div>
      {components.map((component, i) => (
        <TabPanel key={i} value={value} index={i}>
          {component.children}
        </TabPanel>
      ))}
    </div>
  );
};

function TabPanel({children, value, index}) {
  return (
    <div className='tab-panel'>
      {value === index && <div>{children}</div>}
    </div>
  );
}


export default TabsPanel;
