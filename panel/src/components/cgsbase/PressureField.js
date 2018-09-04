import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import pure from 'recompose/pure';
import UnitSelect from './PressureUnitSelect';

const hasNumberFormat = !!(typeof Intl === 'object' && Intl && typeof Intl.NumberFormat === 'function');

/**
 * Display a numeric value as a locale string.
 *
 * Uses Intl.NumberFormat() if available, passing the locales and options props as arguments.
 * If Intl is not available, it outputs number as is (and ignores the locales and options props).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 * @example
 * <NumberField source="score" />
 * // renders the record { id: 1234, score: 567 } as
 * <span>567</span>
 *
 * <NumberField source="score" elStyle={{ color: 'red' }} />
 * // renders the record { id: 1234, score: 567 } as
 * <span style="color:red;">567</span>
 *
 * <NumberField source="share" options={{ style: 'percent' }} />
 * // renders the record { id: 1234, share: 0.2545 } as
 * <span>25%</span>
 *
 * <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 * // renders the record { id: 1234, price: 25.99 } as
 * <span>$25.99</span>
 *
 * <NumberField source="price" locales="fr-FR" options={{ style: 'currency', currency: 'USD' }} />
 * // renders the record { id: 1234, price: 25.99 } as
 * <span>25,99 $US</span>
 */
export class PressureField extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
      value :get(this.props.record, this.props.source),
    };
     onUnitChange(unit) {
        switch (unit) {
            case 'kPa':
                this.setState({value:get(this.props.record, this.props.source) * 1});
                console.log(unit);
                break;
            case 'MPa':
                this.setState({value:get(this.props.record, this.props.source) /1000});
                console.log(unit);
                break;
            case 'PSI':
                this.setState({value:get(this.props.record, this.props.source) * .14503774});
                console.log(unit);
                break;
            default:
                break;
        }
    }

    render() {
        const {record, source, locales, options, elStyle } = this.props;

        return (
            !this.state.value ? null: !hasNumberFormat? <span style={elStyle}>{this.state.value}</span>:

                    <div style={{display: 'inline-block', textAlign: 'center', fontSize: 13.5}}>
                        <span style={elStyle}>{this.state.value.toLocaleString(locales, options)}  </span>
                        <UnitSelect onChange={this.onUnitChange.bind(this)}/>
                    </div>

        )
    }
}


PressureField.propTypes = {
    addLabel: PropTypes.bool,
    elStyle: PropTypes.object,
    label: PropTypes.string,
    locales: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
    options: PropTypes.object,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

const PureNumberField = pure(PressureField);

PureNumberField.defaultProps = {
    addLabel: true,
    style: { textAlign: 'center' },
    headerStyle: { textAlign: 'center' },
    elStyle: {textAlign: 'center', fontWeight: 'bold'},
};

export default PureNumberField;
