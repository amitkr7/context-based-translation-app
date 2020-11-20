import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(text) {
    switch (text) {
      case 'english':
        text = 'Submit';
        break;
      case 'dutch':
        text = 'Voorleggen';
        break;
      case 'hindi':
        text = 'Jama Kare';
        break;
      default:
        text = 'Submit';
    }
    return text;
  }

  renderButton(color) {
    return (
      <button className={`ui ${color} button`}>
        <LanguageContext.Consumer>
          {(text) => this.renderSubmit(text)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
