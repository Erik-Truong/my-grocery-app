import React from 'react';
import './GroceryApp.css';
import List from './List.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);



class GroceryApp extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:'',
      }
    }
    this.useInput = this.useInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  //setState changes state variable
  useInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  //prevents the page to refresh when clicking the Add button
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key!=key);
      this.setState({
        items:filteredItems
      })
  }
  render(){
    return (
      <div className="GroceryApp">
        <header>
          <form id="grocery-list" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Item"
          value={this.state.currentItem.text}
          onChange={this.useInput}/>
        <button type="submit">Add</button>
      </form>
    </header>
    <List items = {this.state.items}
    deleteItem ={this.deleteItem}></List>
    </div>
    );
  }
}
export default GroceryApp;
