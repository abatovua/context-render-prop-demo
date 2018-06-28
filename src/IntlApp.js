import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IntlContext } from './intl/IntlContext';
import { Wrapper } from './intl/Wrapper';

const en = {
    'layout.title': 'Title',
    'layout.label': 'Label',
};

const ru = {
    'layout.title': 'Заголовок',
    'layout.label': 'Ярлык',
};

const de = {};

const supportedLocales = ['en', 'ru', 'de'];

export class IntlApp extends Component {
    constructor() {
        super();
        
        this.state = {
            locale: 'en',
            messages: { en, ru },
        };
        
    }
    
    onLocaleChange = (e) => this.setState({
        locale: e.target.value,
    })
    
    render() {
        const { locale, messages } = this.state;
        
        return (
            <IntlContext.Provider value={messages[locale]}>
                <select onChange={this.onLocaleChange}>
                    {supportedLocales.map(o => (
                        <option value={o}>{o}</option>
                    ))}
                </select>
                <Wrapper />
            </IntlContext.Provider>
        );
    }
}

IntlApp.propTypes = {};
