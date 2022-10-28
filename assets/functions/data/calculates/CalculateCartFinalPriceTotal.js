/**
 *
 *  This is used to calculate/sum all the item totals
 *
 */

// Array imports
import { CART_ITEMS, CART_ITEM_PRICES } from "../../../variables/ARRAYS";

export default function CalculateCartFinalPriceTotal() {
  var cartPricesTotal = 0;

  CART_ITEM_PRICES.length = 0; // Prevents amount from increasing when routing

  // Creating the final price for each item
  for (let i = 0; i < CART_ITEMS.length; i++) {
    const RAW =
      CART_ITEMS[i].getProductPrice * CART_ITEMS[i].getProductQuantity;
    const FIXED = RAW.toFixed(2);

    CART_ITEM_PRICES.push(FIXED);
  }

  // Appending all final prices
  setTimeout(() => {
    for (let j = 0; j < CART_ITEM_PRICES.length; j++) {
      cartPricesTotal += Math.round(CART_ITEM_PRICES[j] * 100) / 100;
    }

    console.log("Cart Total: $" + cartPricesTotal.toFixed(2));
  }, 100);

  // Appending the total to cart
  setTimeout(() => {
    document.querySelectorAll(".cart-final-total").forEach((total) => {
      total.innerHTML = cartPricesTotal.toFixed(2);
    });
  }, 300);
}
