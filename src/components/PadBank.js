import React from 'react'
import DrumPad from './Drumpad';
import './Drum.scss'

class PadBank extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
      super(props);
    }
    render() {
      let padBank;
      if (this.props.power) {
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad
              clip={padBankArr[i].url}
              clipId={padBankArr[i].id}
              keyCode={padBankArr[i].keyCode}
              keyTrigger={padBankArr[i].keyTrigger}
              power={this.props.power}
              updateDisplay={this.props.updateDisplay}
            />
          );
        });
      } else {
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad
              clip='#'
              clipId={padBankArr[i].id}
              keyCode={padBankArr[i].keyCode}
              keyTrigger={padBankArr[i].keyTrigger}
              power={this.props.power}
              updateDisplay={this.props.updateDisplay}
            />
          );
        });
      }
      return <div className='pad-bank'>{padBank}</div>;
    }
  }

  export default PadBank