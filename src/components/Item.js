import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
         <img src={"./img/"+this.props.item.img} alt="boots" />
         <h2>{this.props.item.title}</h2>
         <p>{this.props.item.desc}</p>
         <b>{this.props.item.price}$</b>
         <button className='add_to_cart' onClick={()=>this.props.onAdd(this.props.item)}>+</button>
      </div>
    )
  }
}
 
export default Item;