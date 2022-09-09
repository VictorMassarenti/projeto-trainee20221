import React from "react";

export default function ButtonBuy() {

    function inventoryOutput() {

        console.log('ok')
    }
    
    
    return (
        <button 
        className="material-icons"
        onClick={inventoryOutput}
        >add_shopping_cart
        </button>
    )
}