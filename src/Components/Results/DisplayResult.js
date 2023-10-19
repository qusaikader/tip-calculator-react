
import './DisplayResult.css'


const DisplayResult = (props) => {

    let tipPerPerson = 0.00;
    let billPerPerson = 0.00;


    if (props.finalData !== undefined){
        tipPerPerson = props.finalData.tip;
        billPerPerson = props.finalData.bill;
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
            <button>Reset</button>

        </div>
    )
}

export default DisplayResult;