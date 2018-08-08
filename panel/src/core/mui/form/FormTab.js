import React from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';

const FormTab = ({ label, children, ...rest }) => {
    const height = (input) => {
        const expression = (
            input.type.name === 'LongTextInput' ||
            (input.type.displayName && input.type.displayName.indexOf('ReferenceArrayInput') >= 0) ||
            (input.type.displayName && input.type.displayName.indexOf('RadioButtonGroupInput') >= 0)
        );
        return (expression ? 'auto' : '72px');
    };
    return (
        <span>
            {
                React.Children.map(children, input => input && (
                    <div key={input.props.source} className={`aor-input-${input.props.source}`} style={{ height: height(input), ...input.props.style }}>
                        <FormField input={input} {...rest} />
                    </div>
                ))
            }
        </span>
    );
};

FormTab.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
};

export default FormTab;
