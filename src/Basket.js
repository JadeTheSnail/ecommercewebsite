import logo from './logo.svg';
import Header from './Components/Header';
import './Styles/Basket.css';
import Product from './Components/Product';



// function PriceCalc() {
//     let sum = 0
//     for(let i in props.product.price) {
//         sum += props.product.price[i]
//     }
//     return sum
//     // CONSOLE log

// }

function BasketPage({basket, remove}) {

    function PriceCalc() {
        let sum = 0
        basket?.map((product) => {
            sum = sum + product.price
        } )
        return sum
        // CONSOLE log
    
    }

    console.log("props",)
    return (
        <div>
            <div className='BasketPageCont'>
                <div className='BasketPageBox'>
                    <h1>Your Basket: </h1>
                    {/* Basket Goods here */}
                    {basket?.map((product, index) => {


                        return(
                            <Product product = {product} itemNum = {index} display = {false} remove = {true} removeFrmBasket = {remove}/>
                        )
                    })}
                    <h4>Total Price:</h4>
                    
                    <p>Total Price: £ {PriceCalc()} </p>

                </div>

            </div>
        </div>
    );
}

export default BasketPage;