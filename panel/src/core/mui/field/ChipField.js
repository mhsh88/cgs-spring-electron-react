
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import get from 'lodash.get';
import pure from 'recompose/pure';
import Chip from 'material-ui/Chip';
import { DEFAULT_LANGUAGE, INITIAL_LANGUAGE } from '../../i18n';

const ChipField = ({ source, record = {}, elStyle = { margin: 4 }, language }) => {
    let fieldValue = get(record, source);
    if (typeof fieldValue === 'object') {
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
    return <Chip style={elStyle}>{fieldValue}</Chip>;
};

ChipField.propTypes = {
    addLabel: PropTypes.bool,
    elStyle: PropTypes.object,
    label: PropTypes.string,
    source: PropTypes.string.isRequired,
    record: PropTypes.object,
    language: PropTypes.string,
};

const PureChipField = pure(ChipField);

PureChipField.defaultProps = {
    addLabel: true,
};

const enhance = compose(
    connect(state => ({
        language: state.locale,
    })),
);

export default enhance(PureChipField);
