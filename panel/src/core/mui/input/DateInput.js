import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import DatePicker from 'material-ui/DatePicker';
import persianUtils from 'material-ui-persian-date-picker-utils';
import FieldTitle from '../../util/FieldTitle';
import translate from '../../i18n/translate';

export const datify = (input) => {
    if (!input) {
        return null;
    }

    const date = input instanceof Date ? input : new Date(input);
    if (isNaN(date)) {
        throw new Error(`Invalid date: ${input}`);
    }

    return date;
};

class DateInputComponent extends Component {
    onChange = (_, date) => {
        this.props.input.onChange(date);
        this.props.input.onBlur();
    };

    /**
     * This aims to fix a bug created by the conjunction of
     * redux-form, which expects onBlur to be triggered after onChange, and
     * material-ui, which triggers onBlur on <DatePicker> when the user clicks
     * on the input to bring the focus on the calendar rather than the input.
     *
     * @see https://github.com/erikras/redux-form/issues/1218#issuecomment-229072652
     */
    onBlur = () => {};

    onDismiss = () => this.props.input.onBlur();

    render() {
        const { input, isRequired, label, meta: { touched, error }, options, source, elStyle, resource, locale } = this.props;

        if (locale === 'fa-IR') {
            return (
                <DatePicker
                    {...input}
                    errorText={touched && error}
                    floatingLabelText={<FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />}
                    DateTimeFormat={Intl.DateTimeFormat}
                    container="inline"
                    autoOk
                    locale={locale}
                    value={datify(input.value)}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onDismiss={this.onDismiss}
                    style={elStyle}
                    utils={persianUtils}
                    {...options}
                />
            );
        }

        return (
            <DatePicker
                {...input}
                errorText={touched && error}
                floatingLabelText={<FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />}
                DateTimeFormat={Intl.DateTimeFormat}
                container="inline"
                autoOk
                locale={locale}
                value={datify(input.value)}
                onChange={this.onChange}
                onBlur={this.onBlur}
                onDismiss={this.onDismiss}
                style={elStyle}
                {...options}
            />
        );
    }
}

DateInputComponent.propTypes = {
    addField: PropTypes.bool.isRequired,
    elStyle: PropTypes.object,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    locale: PropTypes.string,
};

DateInputComponent.defaultProps = {
    addField: true,
    options: {},
};

const mapStateToProps = state => ({
    locale: state.locale === 'fa' ? 'fa-IR' : 'en-US',
});

const enhance = compose(
    translate,
    connect(mapStateToProps),
);

const DateInput = enhance(DateInputComponent);

DateInput.propTypes = {
    addField: PropTypes.bool.isRequired,
};

DateInput.defaultProps = {
    addField: true,
};

export default DateInput;
