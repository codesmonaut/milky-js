/** @jsx Milky */
import Milky from './Milky.js';
import Navbar from './components/Navbar.js';
var root = document.getElementById("root");

var AddComponent = function AddComponent(jsx) {
  root.appendChild(jsx);
}; // Write code here:


var App = Milky("h2", null, "Hi, this is Milky App!");
AddComponent(App);
AddComponent(Navbar());