import React from 'react';
import Button from './Button';


class ButtonPanel extends React.Component {
  get groups() {
    this.names = {
      1: ['AC', '+/-', '%', '÷'],
      2: ['7', '8', '9', 'X'],
      3: ['4', '5', '6', '-'],
      4: ['1', '2', '3', '+'],
      5: ['0', '.', '='],
    };
    return this.names;
  }

  renderButton = (value, index, group) => {
    const style = { backgroundColor: '#e0e0e0', flex: '1' };
    const { length } = group;
    const wide = value === '0';
    this.button = index < length - 1 ? <Button value={value} color={style} wide={wide} />
      : <Button value={value} color={{ flex: '1' }} wide={wide} />;
    return this.button;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          { this.groups['1'].map(name => this.renderButton(name)) }
        </div>
        <div className="row">
          { this.groups['2'].map(name => this.renderButton(name)) }
        </div>
        <div className="row">
          { this.groups['3'].map(name => this.renderButton(name)) }
        </div>
        <div className="row">
          { this.groups['4'].map(name => this.renderButton(name)) }
        </div>
        <div className="row">
          { this.groups['5'].map(name => this.renderButton(name)) }
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
