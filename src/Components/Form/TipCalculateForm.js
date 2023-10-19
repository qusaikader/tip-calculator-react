import './TipCalculateForm.css'
import icon_dollar from '../../assets/icon_dollar.svg'
import icon_person from '../../assets/icon_person.svg'
import { useState, useEffect } from 'react'

const TipCalculateForm = (props) => {
    const[totalBill, setTotalBill] = useState();
    const[totalPpl, setTotalPpl] = useState();
    const[tipAmount, setTipAmount] = useState();

    const tipPercentageOne = [5, 10, 15];
    const tipPercentageTwo = [25, 50];

    const inputChangeHandler = (name, value) => {
        if(name === 'bill'){
            setTotalBill(value);
        }
        else if(name === 'people'){
            setTotalPpl(value);
        }
        else if(name === 'tip'){
            setTipAmount(value)
        }
    } 

    useEffect(() => {
        finalDataHandler();
    }, [totalBill, totalPpl, tipAmount]);

    const finalDataHandler = () => {
        if(totalBill !== undefined && totalPpl !== undefined && tipAmount !== undefined){
            if(totalBill > 0 && totalPpl > 0){
                let data = {
                    bill : totalBill,
                    people : totalPpl,
                    tip : tipAmount
                }
                props.dataHandler(data);
            }
        }
    }

    return (
        <div className='tipForm'>
            <div className="input-group">
                <label htmlFor="billAmount">Bill</label>
                <img src={icon_dollar} alt="Dollar Icon" id='inputIcon'/>
                <input type="number" name="billAmount" id="billAmount" placeholder='0' onChange={(e) => inputChangeHandler('bill',e.target.value)}/>
            </div>
            <div className='tip-group'>
                <p>Select Tip %</p>
                <ul>
                {tipPercentageOne.map((amount)=>{
                    return (
                    <li key={amount} onClick={()=>inputChangeHandler('tip',amount)}>{amount}%</li>
                    )
                })
                }
                </ul>
                <ul>
                {tipPercentageTwo.map((amount)=>{
                    return (
                        <li key={amount} onClick={()=>inputChangeHandler('tip',amount)}>{amount}%</li>
                    )
                })
                }
                <li key='custom' className='custom_tip'>Custom</li>
                </ul>
            </div>
            <div className="input-group">
                <label htmlFor="totalPeople">Number of People</label>
                <img src={icon_person} alt="Person Icon" id='inputIcon'/>
                <input type="number" name="totalPeople" id="totalPeople" placeholder='0' onChange={(e) => inputChangeHandler('people',e.target.value)}/>
            </div>
        </div>
    );
}

export default TipCalculateForm;