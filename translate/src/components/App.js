import React from 'react';
import ColorContext from '../contexts/ColorContext';
import { LanguageStore } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import UserCrate from './UserCreate';

class App extends React.Component {


    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="red">
                        <UserCrate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;