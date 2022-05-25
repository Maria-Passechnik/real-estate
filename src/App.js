import './App.css';
import React, {useEffect, useState} from 'react';
import properties from './transactions.json';
import RealEstate from './components/real-estate'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
    console.log(data);
  }, [])

  const loadData = () => {
    setData(properties.properties);
  }
  
  return (
    <div className="App">
      <div>
        {data.map((asset, index) => (
          <>
            <div key={index}>
              <p>{asset}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
