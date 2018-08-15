import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import get from 'lodash.get';
import pure from 'recompose/pure';
import { DEFAULT_LANGUAGE, INITIAL_LANGUAGE } from '../../i18n';

const TextField = ({ source, record = {}, elStyle, language }) => {
    // keys.reduce((result, key) => { if (langs[key] !== undefined) result.push(key); return result; }, [])
    let fieldValue = get(record, source);
    if (typeof fieldValue === 'object' && fieldValue) {
        const hasResourceAnyLocale = Object.keys(fieldValue).reduce((result, key) => {
            if (key !== INITIAL_LANGUAGE) result.push(key); return result;
        }, []).length > 0;
        if (hasResourceAnyLocale) {
            fieldValue = get(fieldValue, language);
            if (fieldValue === undefined || fieldValue === null) {
                fieldValue = get(fieldValue, DEFAULT_LANGUAGE);
            }
            if (fieldValue === undefined || fieldValue === null) {
                fieldValue = get(fieldValue, get(fieldValue, INITIAL_LANGUAGE));
            }
        }
    }
    return (<span style={elStyle}>{fieldValue}</span>);
};

TextField.propTypes = {
    addLabel: PropTypes.bool,
    elStyle: PropTypes.object,
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    language: PropTypes.string,
};

const enhance = compose(
    connect(state => ({
        language: state.locale,
    })),
);

const PureTextField = enhance(pure(TextField));

PureTextField.defaultProps = {
    addLabel: true,
};

export default PureTextField;
