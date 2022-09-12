/** @jsx Milky */
import Milky from '../Milky.js';

var Navbar = function Navbar() {
  return Milky("div", {
    className: "navbar"
  }, Milky("h2", null, "This is Navbar Component"), Milky("h3", null, "Hello!!!"));
};

export default Navbar;