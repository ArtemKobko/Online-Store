import React, { useState } from 'react'; 
import Order from './Order';



export default function Header(props) {
  let [cartOpen,setCartOpen]=useState(false);
  const showOrder=(props)=>{
    let sum=0;
      props.orders.forEach(el =>sum+=Number.parseInt(el.price));
    return( <div>{props.orders.map(el=>(<Order  onDelete={props.onDelete} key={el.id} item={el}/> ))}
            <p className='sum'>Total price:{sum}$</p>
            </div>);
   }
   const showEmpty=()=>{
     return(<div>{<h2>Cart is empty</h2> }</div>)
   }
  return (
   <header>
    <div>
      <span className='logo'>Mont Blanc</span>
      <nav>
        <ul className='nav'>
          <li>About us</li>
          <li>Goods</li>
          <li>Contacts</li>  
          <li  onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`cart ${cartOpen && 'active'}`}>Cart</li>
        </ul>
      </nav>
        {cartOpen &&  
         (
        <div className='shop_cart'>
          {props.orders.length>0 ? showOrder(props):showEmpty()}
        </div>)} 
      </div>
      <div className='banner'></div>
   </header>
  )}