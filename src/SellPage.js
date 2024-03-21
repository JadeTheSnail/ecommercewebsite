import logo from './logo.svg';
import Header from './Components/Header';
import './Styles/SellPage.css'

function Sell() {
    return (
        <div className='sellPageContainer'>
            <div className='sellPageBox'>
                <h1>Sell Your DREAMS...!</h1>
                <div className='sellPageInputs'>
                    <p>Name:</p><input />
                    <p>Email:</p><input />
                    <p>Addres:</p><input />
                    <p>Dream Desc:</p><input id='inpDesc' />
                </div>

            </div>

        </div>
    ) 

}

export default Sell;