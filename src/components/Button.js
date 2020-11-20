import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    let text = 'Submit';
    switch (this.context) {
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
    return <button className='ui primary button'>{text}</button>;
  }
}

export default Button;
