import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {

    state = {
        language: 'english',
        color: 'red'
    }

    onLanguageChange = language => {
        this.setState({ language });
    }
    onColorChange = color => {
        this.setState({ color });
    }

    render() {
        return (
            <div>
                <div>
                    Select an Language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                </div>
                <div>
                    Select an Color:
                    <button
                        class="ui inverted red button"
                        onClick={() => this.onColorChange('red')}
                    >Red</button>
                    <button
                        class="ui inverted blue button"
                        onClick={() => this.onColorChange('blue')}
                    >Blue</button>
                </div>
                <div>
                    <ColorContext.Provider value={this.state.color}>
                        <LanguageContext.Provider value={this.state.language}>
                            <UserCreate />
                        </LanguageContext.Provider>
                    </ColorContext.Provider>
                </div>
            </div>
        )
    }
}

export default App;