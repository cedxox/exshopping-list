import {useState} from "react";
export default function ShoppingList({additemx}) {
    const [formData, setFormData] = useState([{product:"", quantity:0 }])
    const handleChnange = (evt)=>{
        setFormData ((currData)=>{
            return {
                ...currData,
                [evt.target.name] : evt.target.value
            }
        })
    }

    const handleUP=(e)=>{
        e.preventDefault()
        additemx(formData)
        setFormData({product:"", quantity:0})
    }
    return(
       <form className="dune" onSubmit={handleUP}>
        <label htmlFor="product">ExProduct Name</label>
       <input type="text" name="product" id="product"
        value={formData.product} onChange={handleChnange} required/>

       <label htmlFor="quantity">Amount</label>
       <input type="number" name="quantity" id="quantity" min={1} max={50}
        value={formData.quantity} onChange={handleChnange} required/>

       <button className="dune-but">submit</button>
       </form>
    )
}