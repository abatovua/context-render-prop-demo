import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { IntlContext } from './IntlContext';

export class FormattedText extends PureComponent {
    render() {
        const { id, defaultMessage } = this.props;
        
        return (
            <IntlContext.Consumer>
                {messages => (
                    messages[id] ? messages[id] : defaultMessage
                )}
            </IntlContext.Consumer>
        );
    }
}

FormattedText.defaultProps = {
    defaultMessage: '',
};

FormattedText.propTypes = {};
