
import { useState, useEffect } from 'react';
import './DisplayResult.css'


const DisplayResult = (props) => {

    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [billPerPerson, setBillPerPerson] = useState(0);

    useEffect(() => {
        if (props.finalData !== undefined){
            const tip = (props.finalData.tip / 100) * props.finalData.bill;
            const tipPerPerson = (tip / props.finalData.people).toFixed(2);
            const totalBillPerPerson = ((+props.finalData.bill + tip) / props.finalData.people).toFixed(2);
            setTipPerPerson(tipPerPerson);
            setBillPerPerson(totalBillPerPerson);
        }
    }, [props.finalData]);

    const resetHandler = () => {
        setBillPerPerson(0)
        setTipPerPerson(0)
    }

    return (
        <div className='result-container'>
            <div className='displaybox'>
                <div className='output-group'>
                    <div className='informationBox'>
                        <p className='title'>Tip Amount</p>
                        <p>/ person</p>
                    </div>
                    <div className='amountBox'>
                        <p>${tipPerPerson}</p>
                    </div>
                </div>
                <div className='output-group'>
                    <div className='informationBox'>
                        <p className='title'>Total</p>
                        <p>/ person</p>
                    </div>
                    <div className='amountBox'>
                        <p>${billPerPerson}</p>
                    </div>
                </div>
            </div>
            <button onClick={resetHandler}>Reset</button>

        </div>
    )
}

export default DisplayResult;