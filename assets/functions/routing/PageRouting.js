/**
 *
 *  This is used to route through different pages
 *
 */

// Gets the route
function GetRoute(rooter, route) {
  const env = process.env.NODE_ENV;

  // On Client
  if (env == "development") {
    if (rooter.pathname == route) {
      console.log("You are already on that page..");
    } else {
      rooter.push(route, undefined, { shallow: true });
    }
  }

  // On Server
  if (rooter.pathname == route) {
    console.log("You are already on that page..");
  } else {
    rooter.push(route, undefined, { shallow: true });
  }
}

export default function PageRouting(rooter, route, checkRoute) {
  // Making sure the user is at the top of the page before routing
  window.scrollTo(0, 0);
  setTimeout(() => {
    if (window.scrollY === 0) {
      setTimeout(() => {
        GetRoute(rooter, route);
      }, 100);
    }
  }, 900);

  // Checking to see if the user has not reached the top of the page, it will run certain conditions
  setTimeout(() => {
    if (window.scrollY !== 0) {
      checkRoute = true;
      setTimeout(() => {
        GetRoute(rooter, route);
      }, 100);
    }
  }, 900);

  // Forces user to page with refresh
  setTimeout(() => {
    if (checkRoute) {
      rooter.reload();
    }
  }, 950);
}
