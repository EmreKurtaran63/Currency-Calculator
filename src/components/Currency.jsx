import React from 'react'
import "../css/Currency.css";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { RiArrowRightDoubleFill } from "react-icons/ri";

function Currency() {
    return (
        <div className='Container'>
            <div className='baslik'>
                <h2>Döviz Kuru Hesaplayıcı</h2>
            </div>

            <div className='currency-area'>
                <input type='number' className='from-currency-textarea'></input>

                <select className='from-currency'>
                    <option >Dolar</option>
                    <option >USD</option>
                    <option >TR</option>
                </select>

                <RiArrowRightDoubleFill style={{color:"white", margin:"auto",fontSize:"25px",fontWeight:"bolder"}}/>

                <select className='to-currency'>
                    <option >TR</option>
                    <option >Dolar</option>
                    <option >USD</option>
                </select>

                <input type='number' className='to-currency-textarea'></input>
            </div>

            <div>
                <button className='button'><h3>Hesapla</h3></button>
            </div>
        </div>
    )
}

export default Currency