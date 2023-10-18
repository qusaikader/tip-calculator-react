import './TipCalculateForm.css'
import icon_dollar from '../../assets/icon_dollar.svg'
import icon_person from '../../assets/icon_person.svg'

const TipCalculateForm = (props) => {

    const tipPercentageOne = [5, 10, 15];
    const tipPercentageTwo = [25, 50];

    return (
        <div className='tipForm'>
            <div className="input-group">
                <label htmlFor="billAmount">Bill</label>
                <img src={icon_dollar} alt="Dollar Icon" id='inputIcon'/>
                <input type="number" name="billAmount" id="billAmount" placeholder='0'/>
            </div>
            <div className='tip-group'>
                <p>Select Tip %</p>
                <ul>
                {tipPercentageOne.map((amount)=>{
                    return (
                    <li key={amount}>{amount}%</li>
                    )
                })
                }
                </ul>
                <ul>
                {tipPercentageTwo.map((amount)=>{
                    return (
                        <li key={amount}>{amount}%</li>
                    )
                })
                }
                <li key='custom' className='custom_tip'>Custom</li>
                </ul>
            </div>
            <div className="input-group">
                <label htmlFor="totalPeople">Number of People</label>
                <img src={icon_person} alt="Person Icon" id='inputIcon'/>
                <input type="number" name="totalPeople" id="totalPeople" placeholder='0'/>
            </div>
        </div>
    );
}

export default TipCalculateForm;