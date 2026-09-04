import ReactDOM from "react-dom/client";
import App from "./App";

// public/index.html carries static meta/OG/canonical tags as a fallback for
// crawlers that never execute JS (they'll always describe the homepage -
// there's no way to vary that per-route without JS). Once React is about to
// take over, <Seo> (src/components/seo/Seo.js) renders the real per-route
// versions via react-helmet-async - but Helmet only ever appends tags it
// manages, it doesn't know to remove these static ones, so without this
// they'd sit duplicated in <head> and the static (first) one would win for
// anything read via the DOM. Strip them once, here, before the first render.
document
  .querySelectorAll('[data-default="true"]')
  .forEach((el) => el.remove());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
