import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import goods from "./goods";
import Categories from "./components/Categories";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders:[],
      currentItems:[],
      items:goods
    }
    this.state.currentItems=this.state.items;
    this.addToCart=this.addToCart.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.chooseCategory=this.chooseCategory.bind(this);
  }
render(){
  return (
    <div className="main">
    <Header orders={this.state.orders} onDelete={this.deleteItem}/>
    <Categories chooseCategory={this.chooseCategory}/>
    <Items items={this.state.currentItems} onAdd={this.addToCart}/>
    <Footer/>
    </div>
  );
}
  chooseCategory(category){
    if(category==='all'){
      this.setState({currentItems:this.state.items})
      return
    }
   this.setState({
    currentItems:this.state.items.filter(el=>el.category===category)
   });
  };

  addToCart(item){
   let isInArray=false;
    this.state.orders.forEach(el=>{
      if(el.id===item.id){
       isInArray=true;
      }
    })
    if(!isInArray){
      this.setState({orders:[...this.state.orders,item]});
    }
  };
  deleteItem(id){
    this.setState({orders:this.state.orders.filter(el=>el.id !== id)})
  };

}

export default App;
