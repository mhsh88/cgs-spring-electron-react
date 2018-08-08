import React from 'react';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';

export const Responsive = ({ small, medium, large, width, ...rest }) => {
    let component;
    switch (width) {
    case 1:
        component = small || (medium || large);
        break;
    case 2:
        component = medium || (small || large);
        break;
    case 3:
        component = large || (medium || small);
        break;
    default:
        throw new Error(`Unknown width ${width}`);
    }
    return React.cloneElement(component, rest);
};

Responsive.propTypes = {
    small: PropTypes.element,
    medium: PropTypes.element,
    large: PropTypes.element,
    width: PropTypes.number,
};

export default withWidth()(Responsive);
