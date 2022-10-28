/**
 *
 *  This is used to check for the cart items
 *
 */

// Array imports
import {
  ALL_BELTS,
  ALL_BOOTS,
  ALL_HATS,
  ALL_SHIRTS,
  ALL_PRODUCTS,
  CART_ITEMS,
  CART_ITEM_QUANTITIES,
} from "../../../variables/ARRAYS";

// Objects imports

// Function imports
import AddCartItemQuantityTotalToCartLinks from "../adders/AddCartItemQuantityTotalToCartLinks";

// Checks for single item
function GrabCartItem(cookie, object) {
  // Appending item to CART_ITEMS
  if (localStorage.getItem(cookie) && !CART_ITEMS.indexOf(object) > -1) {
    CART_ITEMS.push(object);
  }

  // Setting new quantity
  if (localStorage.getItem(cookie + " quantity")) {
    object.setProductQuantity = localStorage.getItem(cookie + " quantity");
  }

  // Appending quantity of item to CART_ITEM_QUANTITIES
  if (
    localStorage.getItem(cookie + " quantity") &&
    !CART_ITEM_QUANTITIES.indexOf(object.getProductQuantity) > -1
  ) {
    CART_ITEM_QUANTITIES.push(object.getProductQuantity);
  }
}

export default function GrabCartItems() {
  const ISSERVER = typeof window === "undefined"; // Prevents defined error

  if (!ISSERVER) {
    CART_ITEMS.length = 0;
    CART_ITEM_QUANTITIES.length = 0;

    //! Belts
    for (let i = 0; i < ALL_BELTS.length; i++) {
      GrabCartItem(ALL_BELTS[i].getProductName, ALL_BELTS[i]);

      ALL_PRODUCTS.push(ALL_BELTS[i]);
    }

    //! Boots
    for (let j = 0; j < ALL_BOOTS.length; j++) {
      GrabCartItem(ALL_BOOTS[j].getProductName, ALL_BOOTS[j]);

      ALL_PRODUCTS.push(ALL_BOOTS[j]);
    }

    //! Hats
    for (let k = 0; k < ALL_HATS.length; k++) {
      GrabCartItem(ALL_HATS[k].getProductName, ALL_HATS[k]);

      ALL_PRODUCTS.push(ALL_HATS[k]);
    }

    //! Shirts
    for (let l = 0; l < ALL_SHIRTS.length; l++) {
      GrabCartItem(ALL_SHIRTS[l].getProductName, ALL_SHIRTS[l]);

      ALL_PRODUCTS.push(ALL_SHIRTS[l]);
    }

    //! ALL
    // This will show all the current products that will be used on this site (ALOT OF STUFF WILL BE ADDED TO THE CONSOLE SO WATCH OUT!!!)
    if (
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1"
    ) {
      console.log("Here is all the current products for this site:");
      console.table(ALL_PRODUCTS);
    }

    AddCartItemQuantityTotalToCartLinks();
  }
}
