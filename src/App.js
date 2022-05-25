import './App.css';
import React, {useEffect, useState} from 'react';
import properties from './transactions.json';
import RealEstate from './components/real-estate'
import Map from './components/map';

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
      {/* nav - propdo logo, router - 1.assets 2.map */}
      <RealEstate data={data} />
      <Map />
    </div>
  );
}

export default App;
