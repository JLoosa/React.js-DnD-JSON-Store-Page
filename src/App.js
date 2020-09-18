import React from 'react';
import logo from './logo.svg';

import SHOPKEEPER_LIST from "./App.css"

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

class Marketplace {

    /**
     *
     * @param {Shopkeeper[]} shopkeepers
     */
    constructor(shopkeepers) {
        // Only create an empty array for the shopkeepers if one is not provided.
        /**
         *
         * @type {Shopkeeper[]}
         */
        this.shopkeepers = shopkeepers ? shopkeepers : [];
        /**
         *
         * @type {Shopkeeper}
         */
        this.selectedShopkeeper = null;
    }

    getButtons() {
        return this.shopkeepers.map( (sk) => (
            <button onClick={ () => this.state.selectedShopkeeper = sk }>
                sk.shopkeeperName
            </button>
        ) )
    }
}

class Shopkeeper extends React.Component {

    /**
     * @param {Item[]} items
     * @param {string} name
     * @param props
     */
    constructor(items, name, props) {
        super (props);
        // Only define a new list of items if one is not provided
        /**
         *
         * @type {Item[]}
         */
        this.items = items ? items : [];
        /**
         *
         * @type {string}
         */
        this.shopkeeperName = name ? name : "Unnamed Shopkeeper";
        /**
         *
         * @type {Item}
         */
        this.selectedItem = null;
    }

}

class Item {

    /**
     *
     * @param {string} itemName
     * @param {string[]} description
     */
     constructor(itemName, description) {
        /**
         *
         * @type {string}
         */
         this.itemName = itemName ? itemName : "Unnamed Item";
        /**
         *
         * @type {string[]}
         */
         this.description = description ? description : [];
     }

}

class ShopRender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            marketplace: null,
            enableEditing: false,
        }
    }

    /**
     * This method is only going to populate the shopkeeper list.
     * As such, it will only need to be re-rendered in the event that a new shopkeeper is selected.
     *
     * Process: Render the list of Shopkeepers. If one is selected, call that shopkeeper's render method.
     */
    render() {
        return (
            <div id={SHOPKEEPER_LIST}>
                {this.state.marketplace}
            </div>
        )
    }


}

export default App;
