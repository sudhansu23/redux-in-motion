import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';
import Button from '../Button/Button'

class Freezer extends Component {

  render() {
    console.log('props from Freezer', this.props)
    return (
      <Panel title={`Freezer (°${this.props.temperature || 0}C)`}>
        <Button label="Add product" onClick={this.props.onClickAddProduct} />
        <br />
        {
          Object.keys(this.props.flavors)
            .map(flavorName => (
              <FreezerFlavor
                key={flavorName}
                flavorName={flavorName}
                onClickRestock={() => this.props.onClickRestock(flavorName)}
                onClickFlavor={() => this.props.onClickFlavor(flavorName)}
                scoops={this.props.flavors[flavorName]}
              />
            ))
        }
      </Panel>
    );
  }
}

export default Freezer;

