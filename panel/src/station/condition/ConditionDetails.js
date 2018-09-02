import React from 'react';
import {
    BooleanField,
    Datagrid,
    maxLength, maxValue, minValue, NumberField, ReferenceField, required,
    Show, SimpleForm,
    SimpleShowLayout,
     TextField,
} from '../../core';

const ConditionDetails = props => (
    <Show  {...props}>
        <SimpleShowLayout>
            <TextField source="envTempreture" />
            <TextField source="windSpeed" />
            <TextField source="stationDebi" />
            <TextField source="stationInputTemprature" />
            <TextField source="stationInputPressure" />
            <TextField source="stationOutputTemprature" />
            <TextField source="stationOutputPressure"/>
        </SimpleShowLayout>
    </Show>
);

export default ConditionDetails;
