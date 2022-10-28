/**
 *
 *  This is used to check for the favorited items
 *
 */

// Array imports
import { FAVORITE_ITEMS } from "../../../variables/ARRAYS";

// Objects imports
import {} from "../../../variables/OBJECTS";

// Function imports
import AddFavoriteItemQuantityTotalToFavoriteLinks from "../adders/AddFavoriteItemQuantitiesToFavoriteLinks";

// Checks for single item
function GrabFavoriteItem(cookie, object) {
  // Appending item to CART_ITEMS
  if (
    localStorage.getItem("Favorited: " + cookie) &&
    !FAVORITE_ITEMS.indexOf(object) > -1
  ) {
    FAVORITE_ITEMS.push(object);
  }
}

export default function GrabFavoriteItems() {
  const ISSERVER = typeof window === "undefined"; // Prevents defined error

  if (!ISSERVER) {
    FAVORITE_ITEMS.length = 0;

    AddFavoriteItemQuantityTotalToFavoriteLinks();
  }
}
