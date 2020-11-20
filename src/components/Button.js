import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderButton(text) {
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
  render() {
    return (
      <button className='ui primary button'>
        <LanguageContext.Consumer>
          {(text) => this.renderButton(text)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
