import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    maxLength,
} from '../../core';
import CityGateStationTitle from './CityGateStationTitle';

const CityGateStationEdit = props => (
    <Edit title={<CityGateStationTitle />} {...props}>
        <SimpleForm>
            <TextInput source="value" validate={maxLength(45)} options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default CityGateStationEdit;
