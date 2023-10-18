import './DisplayResult.css'


const DisplayResult = (props) => {
    return (
        <div className='result-container'>
            <div className='displaybox'>
                <div className='output-group'>
                    <div className='informationBox'>
                        <p className='title'>Tip Amount</p>
                        <p>/ person</p>
                    </div>
                    <div className='amountBox'>
                        <p>$4.27</p>
                    </div>
                </div>
                <div className='output-group'>
                    <div className='informationBox'>
                        <p className='title'>Total</p>
                        <p>/ person</p>
                    </div>
                    <div className='amountBox'>
                        <p>$34.67</p>
                    </div>
                </div>
            </div>
            <button>Reset</button>

        </div>
    )
}

export default DisplayResult;