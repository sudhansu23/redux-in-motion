import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';
import Button from '../Button/Button'
import { actions } from '../../ducks/freezer'
import store from '../../store'
import * as FLAVORS from '../../constants/flavors'

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.flavors,
    temperature: store.getState().freezer.temperature
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({
      flavors: store.getState().freezer.flavors,
      temperature: store.getState().freezer.temperature
    }))

    setInterval(() => {
      const randomTemperature = -Math.round(Math.random() * 10)
      store.dispatch(actions.updateTemperature(randomTemperature))
    }, 2000)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleClickRestock = flavorName => {
    const amount = +window.prompt(`Enter amount to restock ${flavorName}:`)
    if (!isNaN(amount)) {
      store.dispatch(actions.addProductToFreezer(flavorName, amount))
    }
  }

  handleClickAddProduct = () => {
    const allAvailableFlavours = Object.keys(FLAVORS)
    const flavorName = window.prompt(`Enter flavor name to restock. (Choose from ${allAvailableFlavours.join(', ')})`)

    if (FLAVORS[flavorName]) {
      this.handleClickRestock(flavorName)
    }
  }

  handleClickFlavor = flavorName => store.dispatch(actions.removeScoop(flavorName))

  render() {
    return (
      <Panel title={`Freezer (°${this.state.temperature || 0}C)`}>
        <Button label="Add product" onClick={this.handleClickAddProduct} />
        <br />
        {
          Object.keys(this.state.flavors)
            .map(flavorName => (
              <FreezerFlavor
                key={flavorName}
                flavorName={flavorName}
                onClickRestock={() => this.handleClickRestock(flavorName)}
                onClickFlavor={() => this.handleClickFlavor(flavorName)}
                scoops={this.state.flavors[flavorName]}
              />
            ))
        }
      </Panel>
    );
  }
}

export default Freezer;

