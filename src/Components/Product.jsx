import '../Styles/BuyPage.css'

export default function Product(props) {

    // productDeets = [

    // ] 
console.log(props)
    return (
        <div className='productInfoBox'>
            <img id='ProductImg' src={props.product.image} />
            <div className='productInfo'>
                <p>Name: {props.product.name}</p>
                <p>Price: £{props.product.price}</p>
                <p>Desc: {props.product.desc}</p>
                <p>Find out more: {props.product.link}</p>
                { props.display && 
                <button onClick={() => {props.addToBasket(props.product)}}>Buy</button>}
                { props.remove && 
                <button onClick={() => {props.removeFrmBasket(props.itemNum)}}>Remove</button>}
            </div>


        </div>
    )

}