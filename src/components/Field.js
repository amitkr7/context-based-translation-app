import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    let text = 'Name';
    switch (this.context) {
      case 'english':
        text = 'Name';
        break;
      case 'dutch':
        text = 'Naam';
        break;
      case 'hindi':
        text = 'Naam';
        break;
      default:
        text = 'Submit';
    }
    return (
      <div className='ui field'>
        <label>{text}:</label>
        <input />
      </div>
    );
  }
}

export default Field;
