import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {


    renderButton = color => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => {
                        if (value.language === 'english') {
                            return 'Submit'
                        } else {
                            return 'Onay';
                        }
                    }}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        
        return (
            <ColorContext.Consumer>
                {this.renderButton}
            </ColorContext.Consumer>
            
        );
    }
}

export default Button