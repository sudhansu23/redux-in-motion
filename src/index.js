// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<div>TDD with Redux</div>, document.getElementById('root'));

import store from './store'
import { VANILLA } from "./constants/flavors";
import { addProductToFreezer, updateTemperature } from './actions/freezer';

store.subscribe(() => console.log(store.getState()))

store.dispatch(updateTemperature(-8))
store.dispatch(addProductToFreezer(VANILLA, 17))
