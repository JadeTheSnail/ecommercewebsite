import logo from './logo.svg';
import './Styles/App.css'
import Header from './Components/Header';
import ScrollingImages from './Components/ScrollingImages';
import HomeImagePills from './Images/HomePageBottle.png'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buy from './BuyPage';
import BasketPage from './Basket';
import Sell from './SellPage';
import About from './AboutUs';
import Home from './Home';
import { useState } from 'react';
import Product from './Components/Product';

function App() {
  
let [newItems, setNewItems] = useState([]);

  function AddtoBasket(item) {  
    // Adding to basket with button code
    setNewItems([...newItems, item])
  }

  function RemoveFrmBasket(item, index, itemNum) {
    console.log("ITEM", item)
    const updatedItems = newItems.filter((item, index) => index !==index)
    setNewItems(updatedItems)
    
  
  }








  return (
    <div className=''>
          <Header/>

<Routes>
  <Route
    path='/Home'
    element ={
      <Home/>
    }
  />

  <Route
    path='/About'
    element = {
      <About/>
    }
  />
  <Route
    path='/Buy'
    element = {
      <Buy 
        basket = {[]}
        addToBasket = {AddtoBasket}    
        calc = {[]}
      />
    }
  />
  <Route
    path='/Sell'
    element = {
      <Sell/>
    }
  />
  <Route
    path='/Basket'
    element={
      <BasketPage
      basket={newItems}
      remove = {RemoveFrmBasket} 
      />
    }
  />

  
</Routes>
    </div>
  );
}

export default App;
