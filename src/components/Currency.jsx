import React, { useState } from 'react'
import "../css/Currency.css";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import axios from 'axios';



const Base_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_Key = import.meta.env.VITE_FREECURRENCY_API_KEY;

function Currency() {

    let [amount, setAmount] = useState(0);
    let [fromCurrency, setFromCurrency] = useState("USD");
    let [toCurrency, setToCurrency] = useState("TRY");
    let [result, setResult] = useState(0);


    const Exchanced = async () => {
        console.log("Benim Anahtarım:", import.meta.env.VITE_FREECURRENCY_API_KEY);

        const response = await axios.get(`${Base_URL}?apikey=${API_Key}&base_currency=${fromCurrency}`);
        let resResult = response.data.data[toCurrency] * amount;
        setResult(resResult.toFixed(2));
        console.log(resResult.toFixed(2));

    }


    return (
        <div className='Container'>
            <div className='baslik'>
                <h2>Döviz Kuru Hesaplayıcı</h2>
            </div>

            <div className='currency-area'>
                <input type='number' onChange={(e) => { setAmount(e.target.value) }} className='from-currency-textarea'></input>

                <select className='from-currency' onChange={(e) => { setFromCurrency(e.target.value) }}>
                    <option >USD</option>
                    <option >EUR</option>
                    <option >TRY</option>
                </select>

                <RiArrowRightDoubleFill style={{ color: "white", margin: "auto", fontSize: "25px", fontWeight: "bolder" }} />

                <select className='to-currency' onChange={(e) => { setToCurrency(e.target.value) }}>
                    <option >TRY</option>
                    <option >USD</option>
                    <option >EUR</option>
                </select>

                <input type='text' readOnly value={result} className='to-currency-textarea'></input>
            </div>

            <div>
                <button className='button' onClick={() => { Exchanced() }}><h3>Hesapla</h3></button>
            </div>
        </div>
    )
}

export default Currency