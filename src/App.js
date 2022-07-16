import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./Items";
import goods from "./goods";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      items:goods
    }
  }
render(){
  return (
    <div className="main">
    <Header/>
    <Items items={this.state.items}/>
    <Footer/>
    </div>
  );
}
}

export default App;
