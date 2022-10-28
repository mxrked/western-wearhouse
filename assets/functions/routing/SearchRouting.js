/**
 *
 *  This is used to route the search
 *
 */

// Array imports
import {
  INDEX_KWS,
  INFO_KWS,
  PRODUCTS_KWS,
  HAT_KWS,
  SHIRT_KWS,
  BELT_KWS,
  BOOTS_KWS,
  SUPPORT_KWS,
  CART_KWS,
  FAVORITES_KWS,
  ACCOUNT_KWS,
} from "../../variables/ARRAYS";

// Function imports
import PageRouting from "./PageRouting";

// Check KWs for route
function RouteBasedOnKWS(
  rooter,
  input,
  kws,
  linkIndex,
  route,
  checker,
  type,
  hash
) {
  const SEARCH_LINKS = document.querySelectorAll(".search-link");

  for (let i = 0; i < kws.length; i++) {
    const UPPERCASED_LINK = kws[i].toUpperCase();
    const UPPERCASED_INPUT = input.value.toUpperCase();

    console.log(UPPERCASED_INPUT);

    if (UPPERCASED_INPUT.indexOf(UPPERCASED_LINK) > -1) {
      if (SEARCH_LINKS[linkIndex].style.opacity != 0.5) {
        //! These 2 if statements are to prevent some strange cancel rendering route error
        if (type == "link") {
          PageRouting(rooter, route, checker);
        }

        if (type == "hash") {
          rooter.push(route + hash);
        }
      } else {
        console.log("You are already on that page..");
      }
    }
  }
}

export default function SearchRouting(rooter) {
  // Checkers
  let indexRouted,
    productsRouted,
    infoRouted,
    supportRouted,
    accountRouted,
    cartRouted,
    favoritesRouted = false;

  document.querySelectorAll(".search-ipt").forEach((input) => {
    const INPUT = input;

    RouteBasedOnKWS(rooter, INPUT, INDEX_KWS, 0, "/", indexRouted, "link");
    RouteBasedOnKWS(
      rooter,
      INPUT,
      PRODUCTS_KWS,
      1,
      "/products/",
      productsRouted,
      "link"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      HAT_KWS,
      2,
      "/products/",
      productsRouted,
      "hash",
      "#HATS"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      BOOTS_KWS,
      3,
      "/products/",
      productsRouted,
      "hash",
      "#BOOTS"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      BELT_KWS,
      4,
      "/products/",
      productsRouted,
      "hash",
      "#BELTS"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      SHIRT_KWS,
      5,
      "/products/",
      productsRouted,
      "hash",
      "#SHIRTS"
    );
    RouteBasedOnKWS(rooter, INPUT, INFO_KWS, 6, "/info", infoRouted, "link");
    RouteBasedOnKWS(
      rooter,
      INPUT,
      SUPPORT_KWS,
      7,
      "/support",
      supportRouted,
      "link"
    );
    RouteBasedOnKWS(
      rooter,
      INPUT,
      FAVORITES_KWS,
      8,
      "/favorites",
      favoritesRouted,
      "link"
    );
    RouteBasedOnKWS(rooter, INPUT, CART_KWS, 9, "/cart", cartRouted, "link");
    RouteBasedOnKWS(
      rooter,
      INPUT,
      ACCOUNT_KWS,
      10,
      "/account",
      accountRouted,
      "link"
    );
  });
}
