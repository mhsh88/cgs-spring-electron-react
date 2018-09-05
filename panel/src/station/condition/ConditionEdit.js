import React from 'react';
import {
    SelectInput,
    minValue,
    maxValue,
    maxLength,
    required,
    Create,
    Edit,
    SimpleForm,
    ReferenceInput,
    DisabledInput,
    TextInput,
    DateInput,
    LongTextInput,
    ReferenceManyField,
    Datagrid,
    DateField,
    EditButton,
    NumberInput,
    BooleanInput,
    TextField
} from  '../../core';
import PressureInput from "../../components/cgsbase/input/PressureInput";
import PressureUnit from '../../components/cgsbase/PressureUnitSelect';
import {PressureField} from "../../components/cgsbase/PressureField";
import TemperatureInput from "../../components/cgsbase/input/TemperatureInput";
import DebiInput from "../../components/cgsbase/input/DebiInput";


export class ConditionEdit extends React.Component {
    state = {
        inputPressureUnit: 'kPa',
        outputPressureUnit: 'kPa',
        envTempUnit: 'C°',
        inputTempUnit: 'C°',
        outputTempUnit: 'C°',
        debiUnit: 'متر مکعب بر ساعت'
    };
    debiUnitChange = unit =>{
        this.setState({debiUnit: unit});
    };
    envTempUnitChange = unit =>{
        this.setState({envTempUnit: unit});
    };
    inTempUnit = unit =>{
        this.setState({inputTempUnit: unit});
    };
    outTempUnit = unit =>{
        this.setState({outputTempUnit:unit});
    };
    inpressureUnitChange = unit => {
        this.setState({inputPressureUnit: unit});
    };
    outpressureUnitChange = unit => {
        this.setState({outputPressureUnit: unit});
    };
    inputpressureFormatter = v => {
        let factor = 1;
        switch (this.state.inputPressureUnit) {
            case 'kPa':
                factor = 1;
                return v * factor;
            case 'MPa':
                factor = 0.001;
                return v * factor;
            case 'PSI':
                factor = .14503774;
                return v * factor;
            default:
                return v * factor;

        }
    };
    inputpressureParser = v => {
        let factor = 1;
        switch (this.state.inputPressureUnit) {
            case 'kPa':
                factor = 1;
                return v / factor;
            case 'MPa':
                factor = 0.001;
                return v / factor;
            case 'PSI':
                factor = .14503774;
                return v / factor;
            default:
                return v / factor;
        }
    };
    outputpressureFormatter = v => {
        let factor = 1;
        switch (this.state.outputPressureUnit) {
            case 'kPa':
                factor = 1;
                return v * factor;
            case 'MPa':
                factor = 0.001;
                return v * factor;
            case 'PSI':
                factor = .14503774;
                return v * factor;
            default:
                return v * factor;

        }
    };
    outputpressureParser = v => {
        let factor = 1;
        switch (this.state.outputPressureUnit) {
            case 'kPa':
                factor = 1;
                return v / factor;
            case 'MPa':
                factor = 0.001;
                return v / factor;
            case 'PSI':
                factor = .14503774;
                return v / factor;
            default:
                return v / factor;
        }
    };

    arrangeValues = (record) => {
        const { id, envTempreture, windSpeed, stationDebi, stationInputTemprature, stationInputPressure, stationOutputTemprature, stationOutputPressure, ...rest } = record;
        return {
            id,
            envTempreture: this.state.envTempUnit === 'C°'? envTempreture: this.state.envTempUnit === 'F°'? (envTempreture-32) / 1.8: this.state.envTempUnit === 'K°'? envTempreture - 273.15 : this.state.envTempUnit === 'R°'? (envTempreture - 491.67) * 5/9  : envTempreture,
            windSpeed,
            stationDebi: this.state.debiUnit === 'متر مکعب بر ساعت'? stationDebi: this.state.debiUnit === 'متر مکعب بر روز'? stationDebi / 24: this.state.debiUnit === 'متر مکعب بر ماه'? stationDebi / 24 / 30: this.state.debiUnit === 'متر مکعب بر سال'? stationDebi / 24 / 30 / 365 : stationDebi,
            stationInputTemprature: this.state.inputTempUnit === 'C°'? stationInputTemprature: this.state.inputTempUnit === 'F°'? (stationInputTemprature-32) / 1.8: this.state.inputTempUnit === 'K°'? stationInputTemprature - 273.15 : this.state.inputTempUnit === 'R°'? (stationInputTemprature - 491.67) * 5/9  : stationInputTemprature,
            stationInputPressure: this.state.inputPressureUnit === 'kPa' ? stationInputPressure * 1: this.state.inputPressureUnit === 'MPa'? stationInputPressure * 1000: this.state.inputPressureUnit === 'PSI'?stationInputPressure * 6.89476 : stationInputPressure,
            stationOutputTemprature: this.state.outputTempUnit === 'C°'? stationOutputTemprature: this.state.outputTempUnit === 'F°'? (stationOutputTemprature-32) / 1.8: this.state.outputTempUnit === 'K°'? stationOutputTemprature - 273.15 : this.state.outputTempUnit === 'R°'? (stationOutputTemprature - 491.67) * 5/9  : stationOutputTemprature,
            stationOutputPressure : this.state.outputPressureUnit === 'kPa' ? stationOutputPressure * 1: this.state.outputPressureUnit === 'MPa'? stationOutputPressure * 1000: this.state.outputPressureUnit === 'PSI'?stationOutputPressure * 6.89476 : stationOutputPressure,
            ...rest
        };
    };


    render() {
        return (
            <Edit {...this.props} beforeSave={this.arrangeValues}>
                <SimpleForm>
                    <DisabledInput source="id"/>
                    <TemperatureInput source="envTempreture" onUnitChange={this.envTempUnitChange} validate={[ maxValue(70),minValue(-40)]}/>
                    <NumberInput source="windSpeed" validate={[maxValue(50),minValue(0)]} />
                    <DebiInput source="stationDebi" validate={[minValue(0)]} onUnitChange={this.debiUnitChange}/>
                    <TemperatureInput source="stationInputTemprature" validate={[required, maxValue(70),minValue(-40)]} onUnitChange={this.inTempUnit} />
                    <PressureInput source="stationInputPressure"  validate={required} onUnitChange={this.inpressureUnitChange}/>
                    <TemperatureInput source="stationOutputTemprature" validate={[required, maxValue(70),minValue(-40)]} onUnitChange={this.outTempUnit}/>
                    <PressureInput source="stationOutputPressure"  validate={required} onUnitChange={this.outpressureUnitChange}/>
                </SimpleForm>
            </Edit>
        )
    }
}

export default ConditionEdit;
