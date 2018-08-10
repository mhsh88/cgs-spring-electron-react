import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    maxLength, NumberInput,
} from '../../core';

const CityGateStationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="id" source="province" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="city" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="region" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="address" validate={maxLength(1000)} options={{ fullWidth: true }} />
            <NumberInput source="nominalCapacity" validate={maxLength(1000)} options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default CityGateStationCreate;
