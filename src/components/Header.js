import React, { useState } from 'react'

export default function () {
  let [cartOpen,setCartOpen]=useState(false);
  return (
   <header>
    <div>
      <span className='logo'>Mont Blanc</span>
      <nav>
        <ul className='nav'>
          <li>About us</li>
          <li>Contacts</li>
          <li>User</li>
          <li  onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`cart ${cartOpen && 'active'}`}>Cart</li>
        </ul>
      </nav>
        {cartOpen && (<div className='shop_cart'></div>)}
      </div>
      <div className='banner'></div>
   </header>
  )
}
