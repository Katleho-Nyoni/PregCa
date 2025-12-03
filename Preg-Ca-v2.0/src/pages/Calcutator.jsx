import { useState } from 'react';
import Display from '../assets/febe-vanermen-zD-YtCWPe8w-unsplash.webp';


export default function Calculator() {

    const [period, setPeriod] = useState('');
    const [sex, setSex] = useState('');
    let [results, setResults] = useState('');

    const period_date = new Date(period);
    const sex_date = new Date(sex);

    if (period_date > sex_date){
        alert("You are not pregnant.")
    }

    const GenerateResults = () => {

    
    const ovulation_date_Lowerbound = new Date(period);
    const ovulation_date_Upperbound = new Date(period);
    ovulation_date_Lowerbound.setDate(ovulation_date_Lowerbound.getDate() + 12);
    ovulation_date_Upperbound.setDate(ovulation_date_Upperbound.getDate() + 14);

    const fertility_window_start = new Date(period);
    fertility_window_start.setDate(fertility_window_start.getDate() + 7); // the 8th day after period start | grey area 

    if (sex_date >= period_date && sex_date < fertility_window_start) {
        results = "VERY LOW";
        console.log(`Fertility Window Starts: ${fertility_window_start} | Ovulation Lowerbound: ${ovulation_date_Lowerbound} | Ovulation Upperbound: ${ovulation_date_Upperbound}`);
    } else if (sex_date >= fertility_window_start && sex_date < ovulation_date_Lowerbound){
        results = "MEDIUM HIGH";
        console.log(`Fertility Window Starts: ${fertility_window_start} | Ovulation Lowerbound: ${ovulation_date_Lowerbound} | Ovulation Upperbound: ${ovulation_date_Upperbound}`);
    } else if (sex_date >= ovulation_date_Lowerbound && sex_date <= ovulation_date_Upperbound) {
        results = "HIGH";
        console.log(`Fertility Window Starts: ${fertility_window_start} | Ovulation Lowerbound: ${ovulation_date_Lowerbound} | Ovulation Upperbound: ${ovulation_date_Upperbound}`);
    } else if (sex_date > ovulation_date_Upperbound) {
        results = "LOW";
        console.log(`Fertility Window Starts: ${fertility_window_start} | Ovulation Lowerbound: ${ovulation_date_Lowerbound} | Ovulation Upperbound: ${ovulation_date_Upperbound}`);
    }
    setResults(results);
}

    return(
        <>
            <div className="container">
                <img src={Display} alt="" />
                <span className="content">
                    <h1>Pregnancy Calculator</h1>
                    <br />
                    <label htmlFor="period-date">1st Period Date</label>
                    <input type="date" id="period-date" name="period-date" value={period} onChange={e => setPeriod(e.target.value)} required />
                    <br />
                    <label htmlFor="sex-date">Sex Date</label>
                    <input type="date" id="sex-date" name="sex-date" value={sex} onChange={e => setSex(e.target.value)} required />
                    <br />
                    <p>Are you pregnant:</p>
                    <button onClick={GenerateResults}  >Find Out</button>
                    <p>The Probability that you're pregnant is: </p>
                    <p className='results'>{results}</p>
                </span>              
            </div>
        </>
    );
}