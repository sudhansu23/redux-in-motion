import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';
import store from '../../store'

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.flavors
  }

  componentDidMount() {
    store.subscribe(() => this.setState({
      flavors: store.getState().freezer.flavors
    }))
  }

  render() {
    return (
      <Panel title="Freezer (°0C)">
        {
          Object.keys(this.state.flavors)
            .map(flavorName => (
              <FreezerFlavor
                key={flavorName}
                flavorName={flavorName}
                scoops={this.state.flavors[flavorName]}
              />
            ))
        }
      </Panel>
    );
  }
}

export default Freezer;

