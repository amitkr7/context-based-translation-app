import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(language) {
    switch (language) {
      case 'english':
        language = 'Submit';
        break;
      case 'dutch':
        language = 'Voorleggen';
        break;
      case 'hindi':
        language = 'Jama Kare';
        break;
      default:
        language = 'Submit';
    }
    return language;
  }

  renderButton(color) {
    return (
      <button className={`ui ${color} button`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
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
