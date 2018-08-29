import React from 'react';
import {
    Datagrid,
    maxLength, NumberField, ReferenceField,
    Show, SimpleForm,
    SimpleShowLayout,
    TextField, TextInput,
} from '../../core';
import CalculationGetResult from './CalculationGetResult';

const CalculationDetails = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <ReferenceField label="Station" source="cityGateStation.id" reference="citygatestations">
                <TextField source="city" />
            </ReferenceField>
            <ReferenceField label="Condition" source="condition.id" reference="conditions">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField label="Natural Gas" source="gas.id" reference="gass">
                <TextField source="name" />
            </ReferenceField>
            <CalculationGetResult />
        </SimpleShowLayout>
    </Show>
);

export default CalculationDetails;
