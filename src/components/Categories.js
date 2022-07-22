import React, { Component } from 'react';

export class Categories extends Component {
   constructor(props){
      super(props)
      this.state={
         categories:[
            {
               key:'all',
               name:'All'
            },
            {
               key:'man',
               name:"Man's"
            },
            {
               key:'woman',
               name:"Woman's"
            }
         ]
      }
   }
  render() {
    return (
      <div className='categories'>{this.state.categories.map(el=>(
      <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>{el.name}</div>
      ))}</div>
    )
  }
};

export default Categories;