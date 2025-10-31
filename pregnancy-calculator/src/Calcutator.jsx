import { useState } from 'react';
import Display from './assets/sincerely-media-unsplash.jpg';


export default function Calculator() {

    const [period, setPeriod] = useState('');
    const [sex, setSex] = useState('');
    const [results, setResults] = useState('');

    period = document.getElementById('period-date').value;
    sex = document.getElementById('sex-date').value;

    const period_date = new Date(period);
    const sex_date = new Date(sex);

    
    const ovulation_date_Lowerbound = new Date(period_date);
    const ovulation_date_Upperbound = new Date(period_date);
    ovulation_date_Lowerbound.setDate(ovulation_date_Lowerbound.getDate() + 12);
    ovulation_date_Upperbound.setDate(ovulation_date_Upperbound.getDate() + 14);

    const fertility_window_start = new Date(period);
    fertility_window_start.setDate(fertility_window_start.getDate() + 7); /* the 8th day after period start | grey area */

    if (sex_date >= period_date && sex_date < fertility_window_start) {
        results = "LOW";
    } else if (sex_date >= fertility_window_start && sex_date < ovulation_date_Lowerbound){
        results = "MEDIUM HIGH";
    } else if (sex_date >= ovulation_date_Lowerbound || sex_date <= ovulation_date_Upperbound) {
        results = "HIGH";
    } else {
        results = "VERY LOW";
    }

    return(
        <>
            <div className="container">
                <img src={Display} alt="" />
                <span className="content">
                    <h1>Pregnancy Calculator</h1>
                    <label htmlFor="period-date">1st Period Date</label>
                    <input type="date" id="period-date" name="period-date" required />
                    <br />
                    <label htmlFor="sex-date">Sex Date</label>
                    <input type="date" id="sex-date" name="sex-date" required />
                    <br />
                    <p>Are you pregnant:</p>
                    <button type='submit' >Find Out</button>
                    <p>The Probability that you're pregnant is: </p>
                    <p>{results}</p>
                </span>
            </div>
        </>
    );
}