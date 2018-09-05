import React from 'react';
import {
    BooleanField,
    Datagrid,
    maxLength, maxValue, minValue, NumberField, ReferenceField, required,
    Show, SimpleForm,
    SimpleShowLayout,
     TextField,
} from '../../core';
import {TemperatureField} from "../../components/cgsbase/TemperatureField";
import {PressureField} from "../../components/cgsbase/PressureField";
import {DebiField} from "../../components/cgsbase/DebiField";

const ConditionDetails = props => (
    <Show  {...props}>
        <SimpleShowLayout>
            <TemperatureField source="envTempreture" />
            <TextField source="windSpeed" />
            <DebiField source="stationDebi" />
            <TemperatureField source="stationInputTemprature" />
            <PressureField source="stationInputPressure" />
            <TemperatureField source="stationOutputTemprature" />
            <PressureField source="stationOutputPressure"/>
        </SimpleShowLayout>
    </Show>
);

export default ConditionDetails;
