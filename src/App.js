import React, { Component } from 'react';
import './App.css';
import Productitem from './product-item'; 
import Addproduct from './Addproduct';

const products = [{ name: 'umesh', price: 100 }, { name: 'umesh2', price: 101 }];
localStorage.setItem('products', JSON.stringify(products));
class App extends Component {
  componentWillMount() {
     const products=this.getProducts();
     this.setState({ products });
     
  }



  getProducts(){

  return  this.state.products;
    
       
      
  }
  constructor(props
  ) {
    super(props);

    this.state = { products:JSON.parse(localStorage.getItem('products'))};
    this.onDelete=this.onDelete.bind(this);
    this.onAdd=this.onAdd.bind(this);


  }

  onAdd(name,price){
    console.log("on add",name,price);
    const products=this.getProducts();
    products.push({
      name,
      price
    });
    this.setState({products});
  }

  onDelete(name){
    const products=this.getProducts();
    const filteredProduscts=products.filter(product=>{
      return product.name !== name ;
    });

    this.setState({products:filteredProduscts});
    console.log(filteredProduscts);

  
  }
  render() {
    return (
      <div className="App">
        <h1>Products manager</h1>
        <Addproduct onAdd={this.onAdd}/>
        {this.state.products.map(product => {
          return(
           
          // return <div key={product.name}>
          //   <span>{product.name}</span>
          //   {` | `}
          //   <span>{product.price}</span>
          //   {` | `}
          //   <button>Delete</button>
          // </div>
          <Productitem key={product.name} 
          {...product}
          onDelete={this.onDelete}
          />
          );
        }
        )}
      </div>
    );
  }
}

export default App;
