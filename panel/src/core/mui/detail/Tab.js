import React from 'react';
import PropTypes from 'prop-types';
import Labeled from '../input/Labeled';

const Tab = ({ label, children, ...rest }) => (<span>
    {React.Children.map(children, field => field && (
        <div key={field.props.source} style={field.props.style} className={`aor-field-${field.props.source}`}>
            {field.props.addLabel ?
                    <Labeled
                        {...rest}
                        label={field.props.label}
                        source={field.props.source}
                    >
                        {field}
                    </Labeled> :
            ((typeof field.type === 'string') ? field : React.cloneElement(field, rest))}
        </div>
    ))}
</span>);

Tab.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
};

export default Tab;
