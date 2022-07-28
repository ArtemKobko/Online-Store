import React, { useState } from 'react'; 
import Order from './Order';
import logo from '../images/logo.png'

export default function Header(props) {
  let [cartOpen,setCartOpen]=useState(false);
  let [navClass,setNavClass]=useState('navmenu hide');
  const showOrder=(props)=>{
    let sum=0;
      props.orders.forEach(el =>sum+=Number.parseInt(el.price));
    return( <div>{props.orders.map(el=>(<Order  onDelete={props.onDelete} key={el.id} item={el}/> ))}
            <p className='sum'>Total price:{sum}$</p> <button className='pay'>Pay Now</button>
            </div>);
   }
   const closeCart=()=>{
    setCartOpen(false)
   }
   const showEmpty=()=>{
     return(<div>{<h3>Cart is empty</h3>}<button className='close' onClick={closeCart}>x</button></div>)
   }
   const hideNavMenu=()=>{
   if (navClass==='navmenu hide'){
    setNavClass('hide');
    setCartOpen(false);
   }else{
    setNavClass('navmenu hide')
   }
   }
  return (
   <header>
      <nav>
      <ul className='nav'>
          <li><a href='#logo'>About</a></li>
          <li><a href='#goods'>Goods</a></li>
          <li><a href='#footer'>Contacts</a></li>  
          <li  onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`cart ${cartOpen && 'active'}`}>Cart</li>
        </ul>
        <button className='buttonMenu hide' onClick={hideNavMenu}>Menu</button>
        <ul className={navClass}>
          <li><a href='#logo'>About</a></li>
          <li><a href='#goods'>Goods</a></li>
          <li><a href='#footer'>Contacts</a></li>  
          <li  onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`cart ${cartOpen && 'active'}`}>Cart</li>
        </ul>
      </nav>
        {cartOpen &&  
         (
        <div className='shop_cart'>
          {props.orders.length>0 ? showOrder(props):showEmpty()}
        </div>)} 
      <div className='banner'></div>
      <span className='shop_name'>Mont Blanc Shop</span>
   </header>
  )}