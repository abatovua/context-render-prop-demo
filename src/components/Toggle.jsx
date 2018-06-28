import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const isFunction = arg => typeof arg === 'function';

export class Toggle extends Component {
    constructor() {
        super();
        
        this.state = {
            open: false,
        };
    }
    
    onToggle = () => this.setState(prevState => ({
        open: !prevState.open,
    }))
    
    render() {
        const { open } = this.state;
        const { children } = this.props;
        
        if (isFunction(children)) {
            return children({ open, onToggle: this.onToggle });
        }
        
        return null;
    }
}

Toggle.propTypes = {};

export class ToggleRender extends Component {
    constructor() {
        super();
        
        this.state = {
            open: false,
        };
    }
    
    onToggle = () => this.setState(prevState => ({
        open: !prevState.open,
    }))
    
    render() {
        const { open } = this.state;
        const { children, render } = this.props;
        
        return (
            <Fragment>
                {children}
                {render({ open, onToggle: this.onToggle })}
            </Fragment>
        );
    }
}
