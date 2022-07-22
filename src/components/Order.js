import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
         <img src={"./img/"+this.props.item.img} alt="boots" />
         <h2>{this.props.item.title}</h2>
         <b>{this.props.item.price}$</b>
         <p></p>
         <button className='delete_from_cart' onClick={()=>this.props.onDelete(this.props.item.id)}>x</button>
      </div>
    )
  }
}

export default Order