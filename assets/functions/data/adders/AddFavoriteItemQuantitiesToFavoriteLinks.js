/**
 *
 *  This is used to add the favorite item quantities to favorites links
 *
 */

// Array imports
import { FAVORITE_ITEMS } from "../../../variables/ARRAYS";

export default function AddFavoriteItemQuantityTotalToFavoriteLinks() {
  const FAVORITE_COUNTS = document.querySelectorAll(".favorites-counter");

  FAVORITE_COUNTS.forEach((counter) => {
    setTimeout(() => {
      // If there are items in favorites..
      if (FAVORITE_ITEMS.length > 0) {
        counter.innerHTML = FAVORITE_ITEMS.length;
      }

      // If there are NO items in favorites..
      if (FAVORITE_ITEMS.length <= 0) {
        counter.innerHTML = 0;
      }
    }, 100);
  });
}
