import './App.css';

function App() {
  // const periodDate = document.getElementById('period-date').value;
  // const sexDate = document.getElementById('sex-date').value;

  return (
    <div className="App">
      <h3>Pregnancy Calculator</h3>
      <label htmlFor="period-date">1st Period Date</label>
      <input type="date" id="period-date" name="period-date" required />
      <br />
      <label htmlFor="sex-date">Sex Date</label>
      <input type="date" id="sex-date" name="sex-date" required />
      <br />
      <button>Estimate</button>
      <p>The Probability that you're pregnant is: </p>
    </div>
  );
}

export default App;
