import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    renderSubmit = value => {
        return value === 'english' ? 'Name' : 'Naam';
    }

    render() {
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => this.renderSubmit(value)}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        )
    }
}

export default Field;