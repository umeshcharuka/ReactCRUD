import React, { Component } from 'react';
import './App.css';


class Addproduct extends Component {

   
 constructor(props){
     super(props);
     this.onSubmit=this.onSubmit.bind(this);

 }


 onSubmit(event){

    event.preventDefault();
   console.log(this.inputname.value,this.inputprice.value);
   this.props.onAdd(this.inputname.value,this.inputprice.value);

 }
  render() {
     
    return (
        <form onSubmit={this.onSubmit}>
<div >
    <input placeholder='name' ref={inputname=>this.inputname=inputname}/>
    <input placeholder='price' ref={inputprice=>this.inputprice=inputprice} />

    <button>add</button>
            
          </div>
          </form>
    );
  }
}

export default Addproduct;
