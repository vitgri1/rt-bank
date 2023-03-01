import { useState } from 'react';
import './App.scss';
import Accounts from './Components/Accounts';
import AddAccount from './Components/AddAccount';

const KEY = 'VitalijausREACTBankas';

function App() {

  const [lastRefresh, setLastRefresh] = useState(Date.now());

  return (
    <div className="App">
        <AddAccount KEY={KEY} setLastRefresh={setLastRefresh}/>
        <h2>Klientu sarasas:</h2>
        <Accounts KEY={KEY} setLastRefresh={setLastRefresh} lastRefresh={lastRefresh}/>
    </div>
  );
}

export default App;
