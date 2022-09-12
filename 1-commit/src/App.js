/** @jsx Milky */

import Milky from './Milky.js';
import Navbar from './components/Navbar.js';

const root = document.getElementById(`root`);

const AddComponent = (jsx) => {
    root.appendChild(jsx);
}

// Write code here:

const App = <h2>Hi, this is Milky App!</h2>;

AddComponent(App);
AddComponent(Navbar());