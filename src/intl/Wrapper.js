import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FormattedText } from './FormattedText';

export class Wrapper extends PureComponent {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <FormattedText
                    id="layout.title"
                    defaultMessage="Title"
                />
                <hr/>
                <FormattedText
                    id="layout.label"
                    defaultMessage="Label"
                />
                <hr/>
                <FormattedText
                    id="layout.label111111111"
                    defaultMessage="NO TRANSLATION PROVIDED"
                />
            </div>
        );
    }
}

Wrapper.propTypes = {};
