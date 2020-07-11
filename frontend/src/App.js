import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom';
import HomeScreen from "./Screens/HomeScreen.jsx";
import ProductScreen from "./Screens/ProductScreen.jsx";
import CartScreen from "./Screens/CartScreen";

function App() {
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    };
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    };

    return (
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={openMenu}>
                            &#9776;
                        </button>
                        <Link to="/" className='icon'>amazone</Link>
                    </div>
                    <div className="header-links">
                        <a href="cart.html">Cart</a>
                        <a href="signin.html">Sign In</a>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Shopping Categories</h3>
                    <button onClick={closeMenu} className="sidebar-close-button">X</button>
                    <ul>
                        <li><a href="index.html">Pants</a></li>
                        <li><a href="index.html">Shirts</a></li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                        <Route path = "/products/:id" render={()=><ProductScreen/>}/>
                        <Route path = "/cart/:id?" render = {()=><CartScreen />}/>
                        <Route path="/" render={() => <HomeScreen/>} exact={true}/>
                    </div>
                </main>
                <footer className="footer">
                    All rights reserved.
                </footer>
            </div>
    );
}

export default (App);
