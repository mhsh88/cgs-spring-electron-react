import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    maxLength, NumberInput,
} from '../../core';
import CityGateStationTitle from './CityGateStationTitle';

const CityGateStationEdit = props => (
    <Edit title={<CityGateStationTitle />} {...props}>
        <SimpleForm>
            <TextInput label="id" source="province" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="city" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="region" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="address" validate={maxLength(1000)} options={{ fullWidth: true }} />
            <NumberInput source="nominalCapacity" options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default CityGateStationEdit;
