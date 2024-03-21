import logo from './logo.svg';
import Header from './Components/Header';
import './Styles/Basket.css';
import Product from './Components/Product';
import PriceCalc from './BuyPage';

function BasketPage({basket}) {

    console.log(basket)
    return (
        <div>
            <div className='BasketPageCont'>
                <div className='BasketPageBox'>
                    <h1>Your Basket: </h1>
                    {/* Basket Goods here */}
                    {basket?.map((product) => {
                        return(
                            <Product product = {product} />
                        )
                    })}
                    <button onClick={RemoveFrmBasket}></button>
                    <h4>Total Price:</h4>
                    <p>Total Price: £ {PriceCalc} </p>

                </div>

            </div>
        </div>
    );
}

export default BasketPage;