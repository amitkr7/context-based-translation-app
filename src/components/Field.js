import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    let text = 'Name';
    switch (this.context.language) {
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
        text = 'Name';
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
