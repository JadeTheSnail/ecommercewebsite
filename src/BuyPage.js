import logo from './logo.svg';
import Header from './Components/Header';
import './Styles/BuyPage.css'
import Product from './Components/Product';
import { useState } from 'react';
import Products from '../src/ProductConstructor.js'
import Pill01 from './Images/BlackPill.png';
import Pill02 from './Images/WhitePill.png';
import Pill03 from './Images/RedPill.png';
import Pill04 from './Images/BluePill.png';
import Pill05 from './Images/YellowPill.png'
import Pill06 from './Images/OrangePill.png'
import Pill07 from './Images/GreenPill.png'
import Pill08 from './Images/DGreenPill.png'
import Pill09 from './Images/PurplePill.png'




function Buy({addToBasket}, props) {

    let [ProductPage, setProductPage] = useState([
        new Products(Pill01, 'Nightmare Pill', 15.50, 'This Pill will give you the spooky dreams', 'LINK!'),
        new Products(Pill02, 'Memory Pill', 12.45, 'This pill will bring back those fading memories', 'Link!'),
        new Products(Pill03, 'Religious Experience Pill', 25, 'This pill will bring to closer to [REDACTED]', 'LINK'),
        new Products(Pill04, 'Nostalga Pill', 10.50, 'Remember the good old days with this pill', 'LINK!'),
        new Products(Pill05, 'Happiness Pill', 30, 'Want to experience true happiness? in your dreams?', 'LINK'),
        new Products(Pill06, 'Sadness Pill', 14.50, 'Need to get those bad memories out of your mind?', 'LINK'),
        new Products(Pill07, '"The Trees" Pill', 100, 'The trees know...', 'LINK!'),
        new Products(Pill08, 'Transcend Pill', 20, 'Tired of dreaming OF god? Become god... in your dreams.', 'LINK'),
        new Products(Pill09, 'Vaporwave Pill', 25.50, 'Dream in that good old vaporwave aesthetic', 'link!')
        

    ])

    const PriceCalc = () => {
        let sum = 0
        for(let i in props.product.price) {
            sum += props.product.price[i]
        }
        return sum
    }


    return (
        <div>
            <div className='buyPageContainer'>
                <div className='buyPageBox'>
                    
                        <h1>Pills Pills Pills...!</h1>
                        <div className='productArea'>
                        {ProductPage.map((product) => {
                            return (
                                <Product product={product} addToBasket = {addToBasket} />
                            )
                        })}
                        </div>

                    

                </div>
            </div>
        </div>
    );
}
 
export default Buy;