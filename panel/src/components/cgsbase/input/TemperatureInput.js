import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FieldTitle from '../../../core/util/FieldTitle';
import UnitSelect from '../TemperatureUnitSelect';

/**
 * An Input component for a number
 *
 * @example
 * <NumberInput source="nb_views" />
 *
 * You can customize the `step` props (which defaults to "any")
 * @example
 * <NumberInput source="nb_views" step={1} />
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 */
class TemperatureInput extends Component {
    handleBlur = (eventOrValue) => {
        this.props.onBlur(eventOrValue);
        this.props.input.onBlur(eventOrValue);

        /**
         * Necessary because of a React bug on <input type="number">
         * @see https://github.com/facebook/react/issues/1425
         */
        const value = parseFloat(this.props.input.value);
        this.handleChange(isNaN(value) ? undefined : value);
    };

    handleFocus = (event) => {
        this.props.onFocus(event);
        this.props.input.onFocus(event);
    };

    handleChange = (eventOrValue) => {
        this.props.onChange(eventOrValue);
        this.props.input.onChange(eventOrValue);
    };

    render() {
        const { elStyle, input, isRequired, label, meta: { touched, error }, options, source, step, resource, onUnitChange } = this.props;
        return (

            <div >
                <table >
                    <tr>
                        <th style={{ fontWeight:'normal', textAlign: 'right', alignContent:'center'}}>
                            <TextField
                            {...input}
                            onBlur={this.handleBlur}
                            onFocus={this.handleFocus}
                            onChange={this.handleChange}
                            type="number"
                            step={step}
                            floatingLabelText={<FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />}
                            errorText={touched && error}
                            style={elStyle}
                            {...options}
                        /></th>
                        <th style={{ fontWeight:'normal', alignContent:'center'}}>
                            <UnitSelect onChange={onUnitChange}/>
                        </th>
                    </tr>
                </table>
            </div>
        );
    }
}



TemperatureInput.propTypes = {
    addField: PropTypes.bool.isRequired,
    elStyle: PropTypes.object,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    step: PropTypes.string.isRequired,
    validate: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.func),
    ]),
    onUnitChange: PropTypes.func,
};

TemperatureInput.defaultProps = {
    addField: true,
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    options: {},
    step: 'any',
};

export default TemperatureInput;
