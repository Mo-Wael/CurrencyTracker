import { useState } from 'react';
import { RAPID_API_KEY, RAPID_API_HOST } from '../config';

const CurrencyConverter = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState(null);

    const convert = async () => {
        const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': RAPID_API_KEY,
                'x-rapidapi-host': RAPID_API_HOST
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setResult(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <section className="main-body">
                <h1>The result of measurement</h1>
                <div className="result-screen">
                    <p>{result ? result.result : 'No result yet'}</p>
                </div>
                <div className="input-screen">
                    <div className="country-currency">
                        <select value={from} onChange={(e) => setFrom(e.target.value)}>
                            <option value="">From</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="RUB">RUB</option>
                            <option value="GBP">GBP</option>
                            <option value="EGP">EGP</option>
                            <option value="KWD">KWD</option>
                            <option value="SAR">SAR</option>
                            <option value="AED">AED</option>
                            <option value="ZAR">ZAR</option>
                            <option value="JPY">JPY</option>
                            <option value="CNY">CNY</option>
                            <option value="MXN">MXN</option>
                            <option value="INR">INR</option>
                            <option value="DZD">DZD</option>
                            <option value="LYD">LYD</option>
                            <option value="MAD">MAD</option>
                        </select>
                        <select value={to} onChange={(e) => setTo(e.target.value)}>
                            <option value="">To</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="RUB">RUB</option>
                            <option value="GBP">GBP</option>
                            <option value="EGP">EGP</option>
                            <option value="KWD">KWD</option>
                            <option value="SAR">SAR</option>
                            <option value="AED">AED</option>
                            <option value="ZAR">ZAR</option>
                            <option value="JPY">JPY</option>
                            <option value="CNY">CNY</option>
                            <option value="MXN">MXN</option>
                            <option value="INR">INR</option>
                            <option value="DZD">DZD</option>
                            <option value="LYD">LYD</option>
                            <option value="MAD">MAD</option>
                        </select>
                    </div>
                    <input 
                        type="number" 
                        placeholder="Enter the amount of money" 
                        className="input-design"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <button className="button-design" onClick={convert}>Convert</button>
                </div>
            </section>
        </>
    );
}

export default CurrencyConverter;
