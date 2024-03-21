import '../Styles/BuyPage.css'

export default function Product(props) {

    // productDeets = [

    // ] 

    return (
        <div className='productInfoBox'>
            <img id='ProductImg' src={props.product.image} />
            <div className='productInfo'>
                <p>Name: {props.product.name}</p>
                <p>Price: £{props.product.price}</p>
                <p>Desc: {props.product.desc}</p>
                <p>Find out more: {props.product.link}</p>
                <button onClick={() => {props.addToBasket(props.product)}}>Buy</button>
            </div>


        </div>
    )

}