import { useState, useEffect } from "react"
import {v4 as uuid} from 'uuid';
import ShoppingList from "./ShoppingList";
import "./ShoppingList.css";

export default function ShoppingListx(){
    const [items ,setItems] = useState([])

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("shoppingItems")) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("shoppingItems", JSON.stringify(items));
  }, [items]);

    const addItem = (item)=> {
        setItems((currItems)=>{
            return [...currItems, {...item, id:uuid()}]
            
        })
    }

    const deleteItem = (id) =>{
        setItems((prevItem)=>{
            return prevItem.filter((i)=> i.id !== id)
            
        })
    }
    return(
        <>
        <div className="nune">
            <h1>ExSHOPPING LIST</h1>
        <ShoppingList  additemx={addItem}/>
        <ul className="nune-ul">
            {items.map((i)=> ( 
            <li className="nune-li" key={i.id}><b className="nuneli-b">{i.quantity}</b> <i className="nuneli-i">{i.product} </i>
                <button className="nuneli-but" onClick={()=> deleteItem(i.id)}>X</button>
            </li>))}
        </ul>
        </div>
        </>
    )
}
