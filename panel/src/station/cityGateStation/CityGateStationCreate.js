import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    maxLength,
} from '../../core';

const CityGateStationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="province" validate={maxLength(255)} options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default CityGateStationCreate;
