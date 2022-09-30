import { useState } from 'react';
import './App.css';

function App() {
  const [mailit, setMailit] = useState(0)
  const [kilometrit, setKilometrit] = useState(0)

  function laske(e) {
    e.preventDefault()
    setKilometrit(mailit*1.609)
  }

  return (
    <div id="content">
      <h3>Mailit kilometreiksi</h3>
      <form action="" onSubmit={laske}>
        <div>
          <label htmlFor="">Mailit</label>
          <input type="text" value={mailit} onChange={e => setMailit(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Kilometrit</label>
          <output>{kilometrit.toFixed(2)}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
