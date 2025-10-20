import Display from './assets/sincerely-media-unsplash.jpg';
export default function Calculator() {

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
                    <button>Find Out</button>
                    <p>The Probability that you're pregnant is: </p>
                </span>
            </div>
        </>
    );
}