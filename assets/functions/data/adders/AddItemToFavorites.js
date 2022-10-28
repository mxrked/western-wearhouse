/**
 *
 *  This is used to add an item to favorites
 *
 */

// Array imports
import { FAVORITE_ITEMS } from "../../../variables/ARRAYS";

export default function AddItemToFavorites(cookie, object) {
  const ISSERVER = typeof window === "undefined"; // Prevents defined error

  if (!ISSERVER) {
    // Removing quantity and item cookies from localStorage
    if (localStorage.getItem("Favorited: " + cookie)) {
      localStorage.removeItem("Favorited: " + cookie);
    }

    // Checking localStorage for item, if not in it, adds it to CART_ITEMS
    if (
      !localStorage.getItem("Favorited: " + cookie) &&
      !FAVORITE_ITEMS.indexOf(object) > -1
    ) {
      localStorage.setItem("Favorited: " + cookie, object);
      FAVORITE_ITEMS.push(object);
    }
  }

  console.log("Favorited Items Updated!");
  console.log("Check to see if the items were declared and catched properly");
  console.table(FAVORITE_ITEMS);
}
