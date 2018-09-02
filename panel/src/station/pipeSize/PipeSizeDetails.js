import React from 'react';
import {
    Datagrid,
    maxLength, NumberField, ReferenceField,
    Show, SimpleForm,
    SimpleShowLayout,
    TextField, TextInput,
} from '../../core';

const PipeSizeDetails = props => (
    <Show  {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="name"/>
            <NumberField source="outerDiameter"/>
            <NumberField source="wallThickness"/>
        </SimpleShowLayout>
    </Show>
);

export default PipeSizeDetails;
